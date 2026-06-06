"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ImagePlus } from "lucide-react";
import { createSupabaseBrowserClient, hasSupabaseBrowserConfig } from "@/lib/supabase/client";

export function OnboardingForm() {
  const router = useRouter();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [bizNumber, setBizNumber] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) {
      setMessage("Supabase 환경변수를 설정한 뒤 다시 시도하세요.");
      return;
    }
    if (files.length < 3) {
      setMessage("입점 포트폴리오 사진은 최소 3장이 필요합니다.");
      return;
    }

    setSubmitting(true);
    setMessage("");
    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData.user) {
      setSubmitting(false);
      setMessage("로그인 후 입점을 진행하세요.");
      return;
    }

    const profileId = userData.user.id;
    await supabase.from("profiles").upsert({
      id: profileId,
      name,
      phone,
      email: userData.user.email,
      biz_number: bizNumber,
      region,
      status: "pending",
    });

    for (const [index, file] of files.entries()) {
      const imagePath = `${profileId}/${Date.now()}-${index}-${file.name}`;
      const thumb = await createThumbnail(file);
      const thumbPath = `${profileId}/thumb-${Date.now()}-${index}.webp`;

      const imageUpload = await supabase.storage.from("portfolios").upload(imagePath, file, {
        cacheControl: "3600",
        upsert: false,
      });
      if (imageUpload.error) {
        setSubmitting(false);
        setMessage(imageUpload.error.message);
        return;
      }

      const thumbUpload = await supabase.storage.from("portfolios").upload(thumbPath, thumb, {
        cacheControl: "3600",
        contentType: "image/webp",
        upsert: false,
      });
      if (thumbUpload.error) {
        setSubmitting(false);
        setMessage(thumbUpload.error.message);
        return;
      }

      const imageUrl = supabase.storage.from("portfolios").getPublicUrl(imagePath).data.publicUrl;
      const thumbUrl = supabase.storage.from("portfolios").getPublicUrl(thumbPath).data.publicUrl;
      await supabase.from("portfolios").insert({
        profile_id: profileId,
        image_url: imageUrl,
        thumb_url: thumbUrl,
      });
    }

    setSubmitting(false);
    router.push("/dashboard");
  }

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-md border border-[var(--border)] bg-white p-5 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-950">입점 신청</h1>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          검증 전 프로필은 pending 상태로 저장됩니다. 사진은 현장 포트폴리오 확인을 위해 최소 3장이 필요합니다.
        </p>
      </div>
      {!hasSupabaseBrowserConfig() && (
        <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          Supabase 환경변수가 필요합니다.
        </p>
      )}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="이름" value={name} onChange={setName} required />
        <Field label="휴대폰" value={phone} onChange={setPhone} required />
        <Field label="사업자번호" value={bizNumber} onChange={setBizNumber} required />
        <Field label="활동 지역" value={region} onChange={setRegion} required />
      </div>
      <label className="grid gap-2 text-sm font-medium text-zinc-800">
        포트폴리오 사진
        <div className="grid min-h-40 place-items-center rounded-md border border-dashed border-zinc-300 bg-zinc-50 p-5 text-center">
          <ImagePlus className="mx-auto h-8 w-8 text-zinc-400" />
          <p className="mt-3 text-sm text-zinc-600">{files.length}장 선택됨 · 최소 3장</p>
          <input
            type="file"
            accept="image/*"
            multiple
            className="mt-4 text-sm"
            onChange={(event) => setFiles(Array.from(event.target.files ?? []))}
          />
        </div>
      </label>
      {message && <p className="rounded-md bg-zinc-100 p-3 text-sm text-zinc-700">{message}</p>}
      <button
        disabled={submitting}
        className="h-11 rounded-md bg-[#3182F6] px-4 text-sm font-semibold text-white disabled:bg-zinc-300"
      >
        {submitting ? "저장 중" : "입점 신청 저장"}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-zinc-800">
      {label}
      <input
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-md border border-zinc-200 bg-white px-3 text-zinc-950 outline-none focus:border-[#3182F6] focus:ring-2 focus:ring-[#3182F6]/20"
      />
    </label>
  );
}

async function createThumbnail(file: File) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  const size = 360;
  const scale = Math.min(size / bitmap.width, size / bitmap.height);
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const context = canvas.getContext("2d");
  if (!context) return file;
  context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise<Blob>((resolve) => {
    canvas.toBlob((blob) => resolve(blob ?? file), "image/webp", 0.82);
  });
}

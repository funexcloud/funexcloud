"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseBrowserClient, hasSupabaseBrowserConfig } from "@/lib/supabase/client";

type AuthMode = "login" | "signup";

export function AuthForm({ mode }: { mode: AuthMode }) {
  const router = useRouter();
  const hasConfig = hasSupabaseBrowserConfig();
  const supabase = useMemo(() => createSupabaseBrowserClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bizNumber, setBizNumber] = useState("");
  const [region, setRegion] = useState("");
  const [checking, setChecking] = useState(false);
  const [blacklisted, setBlacklisted] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function checkBlacklist(value = bizNumber) {
    if (mode !== "signup" || value.replace(/\D/g, "").length < 10) return false;
    if (!supabase) return false;
    setChecking(true);
    setMessage("");
    const { data, error } = await supabase.rpc("check_is_blacklisted", {
      input_biz_number: value,
    });
    setChecking(false);
    if (error) {
      setMessage("사업자번호 확인 중 오류가 발생했습니다. 잠시 후 다시 시도하세요.");
      return false;
    }
    setBlacklisted(Boolean(data));
    return Boolean(data);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) {
      setMessage("Supabase 환경변수를 설정한 뒤 다시 시도하세요.");
      return;
    }
    setSubmitting(true);
    setMessage("");

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setSubmitting(false);
      if (error) {
        setMessage(error.message);
        return;
      }
      router.push("/dashboard");
      return;
    }

    const isBlocked = await checkBlacklist();
    if (isBlocked) {
      setSubmitting(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name, phone, biz_number: bizNumber, region } },
    });
    if (error) {
      setSubmitting(false);
      setMessage(error.message);
      return;
    }

    if (data.user) {
      await supabase.from("profiles").upsert({
        id: data.user.id,
        name,
        phone,
        email,
        biz_number: bizNumber,
        region,
        status: "pending",
      });
    }

    setSubmitting(false);
    router.push("/onboarding");
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-md border border-[var(--border)] bg-white p-5 shadow-sm">
      <div>
        <h1 className="text-2xl font-semibold text-zinc-950">{mode === "signup" ? "장례지도사 가입" : "로그인"}</h1>
        <p className="mt-2 text-sm text-zinc-600">
          {mode === "signup" ? "사업자번호 정책 확인 후 입점을 진행합니다." : "Funex Cloud 대시보드로 이동합니다."}
        </p>
      </div>
      {!hasConfig && (
        <p className="rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY 설정이 필요합니다.
        </p>
      )}
      {mode === "signup" && (
        <>
          <Field label="이름" value={name} onChange={setName} required />
          <Field label="휴대폰" value={phone} onChange={setPhone} required />
          <Field label="지역" value={region} onChange={setRegion} required />
          <Field
            label="사업자번호"
            value={bizNumber}
            onChange={(value) => {
              setBizNumber(value);
              setBlacklisted(false);
            }}
            onBlur={() => checkBlacklist()}
            required
          />
          {checking && <p className="text-sm text-zinc-500">사업자번호 확인 중입니다.</p>}
          {blacklisted && (
            <p className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              본 플랫폼 이용 정책상 1년간 재가입이 제한됩니다
            </p>
          )}
        </>
      )}
      <Field label="이메일" type="email" value={email} onChange={setEmail} required />
      <Field label="비밀번호" type="password" value={password} onChange={setPassword} required />
      {message && <p className="rounded-md bg-zinc-100 p-3 text-sm text-zinc-700">{message}</p>}
      <button
        disabled={submitting || blacklisted}
        className="h-11 rounded-md bg-[#3182F6] px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-300"
      >
        {submitting ? "처리 중" : mode === "signup" ? "가입하고 입점 진행" : "로그인"}
      </button>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  onBlur,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  onBlur?: () => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-medium text-zinc-800">
      {label}
      <input
        type={type}
        value={value}
        required={required}
        onBlur={onBlur}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-md border border-zinc-200 bg-white px-3 text-zinc-950 outline-none focus:border-[#3182F6] focus:ring-2 focus:ring-[#3182F6]/20"
      />
    </label>
  );
}

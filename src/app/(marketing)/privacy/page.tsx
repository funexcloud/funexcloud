import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { MarkdownDocument } from "@/components/marketing/MarkdownDocument";

export default function PrivacyPage() {
  const content = fs.readFileSync(path.join(process.cwd(), "funexcloud_privacy_policy.md"), "utf8");
  return (
    <main className="marketing-shell min-h-screen px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm text-[#7bb0ff]">← 홈</Link>
        <MarkdownDocument content={content} />
      </div>
    </main>
  );
}

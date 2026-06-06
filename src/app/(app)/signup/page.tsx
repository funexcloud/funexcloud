import Link from "next/link";
import { AuthForm } from "@/components/app/AuthForms";

export default function SignupPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-md content-center px-4 py-10">
      <AuthForm mode="signup" />
      <p className="mt-4 text-center text-sm text-zinc-600">
        이미 계정이 있나요? <Link href="/login" className="font-semibold text-[#3182F6]">로그인</Link>
      </p>
    </main>
  );
}

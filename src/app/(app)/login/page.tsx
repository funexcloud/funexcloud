import Link from "next/link";
import { AuthForm } from "@/components/app/AuthForms";

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-3.5rem)] max-w-md content-center px-4 py-10">
      <AuthForm mode="login" />
      <p className="mt-4 text-center text-sm text-zinc-600">
        계정이 없나요? <Link href="/signup" className="font-semibold text-[#3182F6]">장례지도사 가입</Link>
      </p>
    </main>
  );
}

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Handshake } from "lucide-react";
import { notFound } from "next/navigation";

import { RichMarkdown } from "@/components/marketing/RichMarkdown";
import { ShineCard } from "@/components/ui/shine-card";
import { getPostBySlug, getPublishedPosts } from "@/lib/ceo-content";

type CeoPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({
    slug: post.slug,
  }));
}

export default async function CeoPostPage({ params }: CeoPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="marketing-shell min-h-screen bg-[#050505] text-white">
      <article className="relative overflow-hidden py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(49,130,246,0.08)_0%,transparent_58%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3182F6]/35 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/ceo"
            className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-white/65 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            CEO 인사이트
          </Link>

          <header className="mb-12">
            <p className="eyebrow-tv mb-4">CEO WHITEPAPER</p>
            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl">
              <span className="text-tv-gradient">{post.title}</span>
            </h1>
            <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-white/55">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {post.date}
            </div>
            <p className="mt-6 text-lg leading-8 text-white/72">{post.summary}</p>
          </header>

          <RichMarkdown content={post.content} />

          <ShineCard className="mt-14 bg-[#0b1120] p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#3182F6]">
                  Next conversation
                </p>
                <h2 className="mt-3 text-2xl font-black text-white">Funex Cloud와 연결하기</h2>
                <p className="mt-3 text-sm leading-7 text-white/65">
                  백서의 관점을 실제 운영 흐름에 적용할 수 있는 방향을 함께 논의합니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:min-w-48">
                <Link
                  href="https://funexcloud.com"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#3182F6] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#256bd1]"
                >
                  메인으로 이동
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-bold text-white/78 transition-colors hover:border-[#3182F6]/50 hover:text-white"
                >
                  <Handshake className="h-4 w-4" aria-hidden="true" />
                  제휴/문의
                </a>
                {/* TODO: Replace with the partnership/contact URL when it is finalized. */}
              </div>
            </div>
          </ShineCard>
        </div>
      </article>
    </main>
  );
}

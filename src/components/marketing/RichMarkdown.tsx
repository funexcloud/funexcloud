import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type RichMarkdownProps = {
  content: string;
};

export function RichMarkdown({ content }: RichMarkdownProps) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-zinc-50 prose-a:text-[#3182F6] prose-strong:text-[#3182F6]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 text-3xl font-black leading-tight text-white sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 mb-4 text-2xl font-black leading-tight text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 mb-3 text-xl font-bold text-white">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-base leading-8 text-white/78">{children}</p>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-semibold text-[#3182F6] underline underline-offset-4 transition-colors hover:text-cyan-300"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-white">{children}</strong>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-2 border-[#3182F6]/70 bg-white/[0.03] py-4 pl-5 text-white/82">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="mb-6 list-disc space-y-2 pl-6 text-white/78">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-6 list-decimal space-y-2 pl-6 text-white/78">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-8">{children}</li>,
          table: ({ children }) => (
            <div className="my-8 overflow-x-auto rounded-lg border border-white/10">
              <table className="w-full border-collapse text-left text-sm text-white/78">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-white/10 bg-white/[0.04] px-4 py-3 font-bold text-white">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-white/10 px-4 py-3">{children}</td>
          ),
          code: ({ children }) => (
            <code className="rounded border border-white/10 bg-slate-950/80 px-1.5 py-0.5 font-mono text-sm text-cyan-200">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-8 overflow-x-auto rounded-lg border border-white/10 bg-slate-950/90 p-4">
              {children}
            </pre>
          ),
          hr: () => <hr className="my-10 border-white/10" />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

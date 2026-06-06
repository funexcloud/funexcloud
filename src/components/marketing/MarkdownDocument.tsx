export function MarkdownDocument({ content }: { content: string }) {
  return (
    <article className="prose prose-invert max-w-none">
      {content.split(/\r?\n/).map((line, index) => {
        if (line.startsWith("# ")) {
          return <h1 key={index} className="mt-8 text-3xl font-semibold text-white">{line.slice(2)}</h1>;
        }
        if (line.startsWith("## ")) {
          return <h2 key={index} className="mt-7 text-2xl font-semibold text-white">{line.slice(3)}</h2>;
        }
        if (line.startsWith("### ")) {
          return <h3 key={index} className="mt-6 text-xl font-semibold text-white">{line.slice(4)}</h3>;
        }
        if (line.trim().startsWith("- ")) {
          return <p key={index} className="my-2 pl-4 text-zinc-300">• {line.trim().slice(2)}</p>;
        }
        if (!line.trim()) {
          return <div key={index} className="h-3" />;
        }
        return <p key={index} className="my-3 leading-7 text-zinc-300">{line}</p>;
      })}
    </article>
  );
}

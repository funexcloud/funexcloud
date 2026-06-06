import Link from "next/link";

type SlashButtonVariant = "gradient" | "space";

type SlashButtonProps = {
  href: string;
  label: string;
  variant?: SlashButtonVariant;
  className?: string;
};

export default function SlashButton({
  href,
  label,
  variant = "space",
  className = "",
}: SlashButtonProps) {
  const variantClass =
    variant === "gradient" ? "slash-button--gradient" : "slash-button--space";

  return (
    <Link
      href={href}
      className={`slash-button ${variantClass} ${className}`.trim()}
    >
      <span className="slash-button__content">
        <span className="slash-button__label">{label}</span>
      </span>
    </Link>
  );
}

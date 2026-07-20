import clsx from "clsx";

type CornerBracketProps = {
  className?: string;
};

export default function CornerBracket({ className }: CornerBracketProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={clsx("size-4 shrink-0", className)}
    >
      <path d="M0.5 0.5H16M0.5 0.5V16" stroke="black" />
    </svg>
  );
}

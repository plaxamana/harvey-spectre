import clsx from "clsx";

type ArrowUpRightProps = {
  className?: string;
};

export default function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={clsx("size-8 shrink-0", className)}
    >
      <path
        d="M10 22L22 10M22 10H11M22 10V21"
        stroke="black"
        strokeWidth="1.5"
      />
    </svg>
  );
}

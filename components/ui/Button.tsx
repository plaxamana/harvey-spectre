import clsx from "clsx";
import Link from "next/link";

type ButtonVariant = "primary" | "outline";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsLink = BaseProps & {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<React.ComponentPropsWithoutRef<"button">, "className">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

const BASE_STYLES =
  "inline-flex shrink-0 items-center justify-center rounded-full px-4 py-3 font-medium text-[14px] tracking-[-0.56px] transition-opacity hover:opacity-80";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-black text-white",
  outline: "border border-white text-white",
};

export default function Button({
  children,
  className,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = clsx(BASE_STYLES, VARIANT_STYLES[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}

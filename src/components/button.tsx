import { clsx } from "clsx";

interface ButtonProps {
  as?: React.ElementType;
  className?: string;
  [key: string]: any;
}

export default function Button({ as: Component = "button", className, ...props }: ButtonProps) {
  const Comp: any = Component as any;
  return (
    <Comp
      {...props}
      className={clsx(
        "group inline-flex items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-full bg-white p-3 transition-all duration-300",
        "outline-none ring-2 ring-gray-200/45 focus-within:outline-none focus-within:ring-4 hover:ring-4 dark:text-black dark:ring-gray-200/30",
        className
      )}
    />
  );
}

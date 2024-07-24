import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[3.6vw] w-full border-b border-slate-900 bg-white px-3 py-2 text-sm ring-offset-white tablet:text-[2.5vw] mobile:text-[5vw] font-display mobile:pb-[4vw] mobile:px-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[1.2vw] placeholder:text-center placeholder:w-full placeholder:flex placeholder:justify-center placeholder:items-center placeholder:text-black placeholder:font-normal placeholder:tablet:text-[2vw] placeholder:mobile:text-[4vw] placeholder:mobile:text-start placeholder:mobile:mb-[2vw] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };

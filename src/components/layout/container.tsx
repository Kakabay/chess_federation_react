import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn(className, "w-full max-w-[1448px] mx-auto px-6")}>
      {children}
    </div>
  );
};

export default Container;

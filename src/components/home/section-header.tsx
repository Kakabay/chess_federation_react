import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Props {
  title: string;
  icon: string;
  className?: string;
  titleClassName?: string;
  link?: {
    path: string;
    text: string;
  };
}

const SectionHeader = ({
  title,
  icon,
  className,
  link,
  titleClassName,
}: Props) => {
  return (
    <motion.div
      initial={{
        translateY: "50%",
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      className={cn(
        "flex items-end justify-between pb-2.5 relative",
        className
      )}
    >
      <div className="flex items-end gap-5">
        <img src={icon} alt="icon" />
        <h2 className={cn("h2 text-BROWN", titleClassName)}>{title}</h2>
      </div>

      {link && (
        <div className="flex items-center gap-[5px]">
          <div className="text-BROWN">{link.text}</div>
          <ChevronRight size={20} color="#401D09" />
        </div>
      )}

      <motion.div
        initial={{
          width: 0,
          opacity: 0,
        }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
        className="absolute bottom-0 w-full border border-BROWN"
      ></motion.div>
    </motion.div>
  );
};

export default SectionHeader;

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";
import { useZusLang } from "@/zustand/use-zus-lang";
import { months } from "@/lib/constants";

interface Props {
  start: string;
  end: string;
  name: string;
  place: string;
  className?: string;
  line?: "top" | "bottom" | "none";
  isCurrent?: boolean;
  link: string;
}

const EventCard = ({
  start,
  end,
  className,
  place,
  name,
  line,
  isCurrent = false,
  link,
}: Props) => {
  const activeLang = useZusLang().activeLang;

  return !isCurrent ? (
    link || (link && link?.length > 0) ? (
      <motion.a
        href={link}
        target="_blank"
        className={cn(
          "flex items-start cursor-pointer group md:gap-10 gap-2 md:max-w-[952px] w-full",
          className,
          {
            "border-t-[1px] pt-[20px] border-LBROWN": line === "top",
            "border-b-[1px] pb-[20px] border-LBROWN": line === "bottom",
          }
        )}
        initial={{
          translateY: "50%",
          opacity: 0,
        }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      >
        <div className="flex flex-col gap-[9px] text-DGRAY2 leading-[120%]">
          <h3 className="flex gap-[5px] items-end">
            <span className="h3 text-BLACK">
              {start && start.slice(8, 10)}{" "}
            </span>
            {start
              ? activeLang.value === "tm"
                ? months.tm[+start.slice(5, 7) - 1]
                : activeLang.value === "ru"
                ? months.ru[+start.slice(5, 7) - 1]
                : months.tm[+start.slice(5, 7) - 1]
              : null}
          </h3>
          <Separator className="h-[2px] bg-BLACK" />

          <h3 className="flex gap-[5px] items-end">
            <span className="h3 text-BLACK">{end && end.slice(8, 10)} </span>{" "}
            {end
              ? activeLang.value === "tm"
                ? months.tm[+end.slice(5, 7) - 1]
                : activeLang.value === "ru"
                ? months.ru[+end.slice(5, 7) - 1]
                : months.tm[+end.slice(5, 7) - 1]
              : null}
          </h3>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="h3 font-[bitter] group-hover:text-LBROWN transition-all">
            {name}
          </h3>
          <div className="text-DGRAY2 leading-[140%]">{place}</div>
        </div>
      </motion.a>
    ) : (
      <motion.div
        className={cn(
          "flex items-start group md:gap-10 gap-2 md:max-w-[952px] w-full",
          className,
          {
            "border-t-[1px] pt-[20px] border-LBROWN": line === "top",
            "border-b-[1px] pb-[20px] border-LBROWN": line === "bottom",
          }
        )}
        initial={{
          translateY: "50%",
          opacity: 0,
        }}
        whileInView={{ translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      >
        <div className="flex flex-col gap-[9px] text-DGRAY2 leading-[120%]">
          <h3 className="flex gap-[5px] items-end">
            <span className="h3 text-BLACK">
              {start && start.slice(8, 10)}{" "}
            </span>
            {start
              ? activeLang.value === "tm"
                ? months.tm[+start.slice(5, 7) - 1]
                : activeLang.value === "ru"
                ? months.ru[+start.slice(5, 7) - 1]
                : months.tm[+start.slice(5, 7) - 1]
              : null}
          </h3>
          <Separator className="h-[2px] bg-BLACK" />

          <h3 className="flex gap-[5px] items-end">
            <span className="h3 text-BLACK">{end && end.slice(8, 10)} </span>{" "}
            {end
              ? activeLang.value === "tm"
                ? months.tm[+end.slice(5, 7) - 1]
                : activeLang.value === "ru"
                ? months.ru[+end.slice(5, 7) - 1]
                : months.tm[+end.slice(5, 7) - 1]
              : null}
          </h3>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="h3 font-[bitter] transition-all">{name}</h3>
          <div className="text-DGRAY2 leading-[140%]">{place}</div>
        </div>
      </motion.div>
    )
  ) : link || (link && link?.length > 0) ? (
    <motion.a
      href={link}
      target="_blank"
      className={cn(
        "flex group items-start cursor-pointer md:gap-10 gap-2 w-full md:max-w-[952px]",
        className,
        {
          "border-t-2 pt-5 border-white": line === "top",
          "border-b-2 pb-5 border-white": line === "bottom",
        }
      )}
      initial={{
        translateY: "50%",
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
    >
      <div className="flex flex-col gap-[9px] text-DGRAY2 leading-[120%]">
        <h3 className="flex gap-[5px] items-end">
          <span className="h3 text-BLACK">{start && start.slice(8, 10)} </span>
          {start
            ? activeLang.value === "tm"
              ? months.tm[+start.slice(5, 7) - 1]
              : activeLang.value === "ru"
              ? months.ru[+start.slice(5, 7) - 1]
              : months.tm[+start.slice(5, 7) - 1]
            : null}
        </h3>
        <Separator className="h-[2px] bg-BLACK" />
        <h3 className="flex gap-[5px] items-end">
          <span className="h3 text-BLACK">{end && end.slice(8, 10)} </span>{" "}
          {end
            ? activeLang.value === "tm"
              ? months.tm[+end.slice(5, 7) - 1]
              : activeLang.value === "ru"
              ? months.ru[+end.slice(5, 7) - 1]
              : months.tm[+end.slice(5, 7) - 1]
            : null}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter] group-hover:text-LBROWN transition-all">
          {name}
        </h3>
        <div className="text-LBROWN2 leading-[120%]">{place}</div>
      </div>
    </motion.a>
  ) : (
    <motion.div
      className={cn(
        "flex group items-start  gap-10 max-w-[952px] rounded-[24px] text-white",
        className,
        {
          "border-t-2 pt-5 border-white": line === "top",
          "border-b-[1px] pb-5 border-white": line === "bottom",
        }
      )}
      initial={{
        translateY: "50%",
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
    >
      <div className="flex flex-col gap-[9px] text-white leading-[120%]">
        <h3 className="text-LBROWN2 flex gap-[5px] items-end">
          <span className="h3 text-white">{end.slice(8, 10)} </span>{" "}
          {activeLang.value === "tm"
            ? months.tm[+end.slice(5, 7) - 1]
            : activeLang.value === "ru"
            ? months.ru[+end.slice(5, 7) - 1]
            : months.tm[+end.slice(5, 7) - 1]}
        </h3>
        <Separator className="h-[2px] bg-LBROWN" />

        <h3 className="text-LBROWN2 flex gap-[5px] items-end">
          <span className="h3 text-white">{start.slice(8, 10)} </span>
          {activeLang.value === "tm"
            ? months.tm[+start.slice(5, 7) - 1]
            : activeLang.value === "ru"
            ? months.ru[+start.slice(5, 7) - 1]
            : months.tm[+start.slice(5, 7) - 1]}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter] transition-all">{name}</h3>
        <div className="text-LBROWN2 leading-[120%]">{place}</div>
      </div>
    </motion.div>
  );
};

export default EventCard;

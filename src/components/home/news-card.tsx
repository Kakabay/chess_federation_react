import { motion } from "framer-motion";

interface Props {
  date: string;
  title: string;
  img: string;
  animationDelay?: number;
}

const NewsCard = ({ date, title, img, animationDelay }: Props) => {
  return (
    <motion.div
      className="p-5 rounded-sm border flex flex-col gap-5 border-LBROWN"
      initial={{
        translateY: "25%",
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: animationDelay ? animationDelay * 0.2 : 0,
        duration: 0.6,
        ease: [0.55, 0, 0.1, 1],
      }}
    >
      <div className="text-GRAY1 leading-none">{date}</div>
      <h3 className="h3 font-[bitter]">{title}</h3>
      <img src={img} alt="image" className="rounded-[2px]" />
    </motion.div>
  );
};

export default NewsCard;

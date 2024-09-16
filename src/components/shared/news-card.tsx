import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface Props {
  date: string;
  title: string;
  img: string;
  id: number;
  className?: string;
  animationDelay?: number;
  titleClassName?: string;
  type: 'small' | 'big';
}

const NewsCard = ({
  date,
  title,
  img,
  animationDelay,
  titleClassName,
  className,
  type,
  id,
}: Props) => {
  return (
    <motion.div
      className={cn('p-5 rounded-sm border border-LBROWN group', className)}
      initial={{
        translateY: '25%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: animationDelay ? animationDelay * 0.2 : 0,
        duration: 0.6,
        ease: [0.55, 0, 0.1, 1],
      }}>
      <Link to={`/news/${id}`} className="flex flex-col gap-5">
        <h3 className="text-GRAY1 leading-none">{date}</h3>
        <h2
          className={cn(
            'h3 font-[bitter] group-hover:text-LBROWN transition-all ease-TRANSITIOM_ONE duration-300',
            titleClassName,
          )}>
          {title}
        </h2>
        <div
          className={clsx(' min-h-[149px] h-full rounded-[2px] overflow-hidden', {
            'max-h-[148px]': type === 'small',
            'max-h-[400px]': type === 'big',
          })}>
          <img src={img} alt="image" className=" w-full h-full object-cover" />
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;

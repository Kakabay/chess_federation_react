import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';

interface Props {
  start: string;
  end: string;
  title: string;
  venue: string;
  className?: string;
}

const EventCard = ({ start, end, className, venue, title }: Props) => {
  return (
    <motion.div
      className={cn('flex items-start gap-10', className)}
      initial={{
        translateY: '50%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <div className="flex flex-col gap-[9px] flex-[1_1_100px] text-DGRAY2 leading-none">
        <div className="first-letter:!h3">{start}</div>
        <Separator className="h-[2px] bg-BLACK" />
        <div className="first-letter:!h3">{end}</div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter]">{title}</h3>
        <div className="text-DGRAY2 leading-none">{venue}</div>
      </div>
    </motion.div>
  );
};

export default EventCard;

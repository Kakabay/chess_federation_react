import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';

interface Props {
  start: string;
  end: string;
  title: string;
  venue: string;
  className?: string;
  line?: 'top' | 'bottom' | 'none';
}

const EventCard = ({ start, end, className, venue, title, line }: Props) => {
  console.log(start);
  return (
    <motion.div
      className={cn('flex items-start gap-10 max-w-[952px]', className, {
        'border-t-2 pt-[20px] border-LBROWN': line === 'top',
        'border-b-2 pb-[20px] border-LBROWN': line === 'bottom',
      })}
      initial={{
        translateY: '50%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <div className="flex flex-col gap-[9px] flex-[1_1_100px] text-DGRAY2 leading-[120%]">
        <h3 className="">
          <span className="h3 text-BLACK">{start.split(' ')[0]} </span>
          {start.split(' ')[1]}
        </h3>
        <Separator className="h-[2px] bg-BLACK" />

        <h3 className="">
          <span className="h3 text-BLACK">{end.split(' ')[0]} </span>
          {end.split(' ')[1]}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter]">{title}</h3>
        <div className="text-DGRAY2 leading-none">{venue}</div>
      </div>
    </motion.div>
  );
};

export default EventCard;

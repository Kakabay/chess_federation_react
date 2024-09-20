import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { motion } from 'framer-motion';
import { useZusLang } from '@/zustand/use-zus-lang';
import { months } from '@/lib/constants';

interface Props {
  start: string;
  end: string;
  name: string;
  place: string;
  className?: string;
  line?: 'top' | 'bottom' | 'none';
  isCurrent: boolean;
}

const EventCard = ({ start, end, className, place, name, line, isCurrent }: Props) => {
  const activeLang = useZusLang().activeLang;

  return !isCurrent ? (
    <motion.div
      className={cn('flex items-start md:gap-10 gap-2 w-full lg:w-[952px]', className, {
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
      <div className="flex flex-col gap-[9px] text-DGRAY2 leading-[120%]">
        <h3 className="">
          <span className="h3 text-BLACK">{end.slice(8, 10)} </span>{' '}
          {activeLang.value === 'tm'
            ? months.tm[+end.slice(5, 7)]
            : activeLang.value === 'ru'
            ? months.ru[+end.slice(5, 7)]
            : months.tm[+end.slice(5, 7)]}
        </h3>
        <Separator className="h-[2px] bg-BLACK" />

        <h3 className="">
          <span className="h3 text-BLACK">{start.slice(8, 10)} </span>
          {activeLang.value === 'tm'
            ? months.tm[+start.slice(5, 7)]
            : activeLang.value === 'ru'
            ? months.ru[+start.slice(5, 7)]
            : months.tm[+start.slice(5, 7)]}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter]">{name}</h3>
        <div className="text-DGRAY2 leading-none">{place}</div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      className={cn('flex items-start gap-10 w-[952px] rounded-[24px] text-white', className, {
        'border-t-2 pt-5 border-white': line === 'top',
        'border-b-2 pb-5 border-white': line === 'bottom',
      })}
      initial={{
        translateY: '50%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}>
      <div className="flex flex-col gap-[9px] text-white leading-[120%]">
        <h3 className="text-LBROWN2">
          <span className="h3 text-white">{end.slice(8, 10)} </span>{' '}
          {activeLang.value === 'tm'
            ? months.tm[+end.slice(5, 7)]
            : activeLang.value === 'ru'
            ? months.ru[+end.slice(5, 7)]
            : months.tm[+end.slice(5, 7)]}
        </h3>
        <Separator className="h-[2px] bg-LBROWN" />

        <h3 className="text-LBROWN2">
          <span className="h3 text-white">{start.slice(8, 10)} </span>
          {activeLang.value === 'tm'
            ? months.tm[+start.slice(5, 7)]
            : activeLang.value === 'ru'
            ? months.ru[+start.slice(5, 7)]
            : months.tm[+start.slice(5, 7)]}
        </h3>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="h3 font-[bitter]">{name}</h3>
        <div className="text-LBROWN2 leading-none">{place}</div>
      </div>
    </motion.div>
  );
};

export default EventCard;

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Props {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: Props) => {
  return (
    <motion.h1
      initial={{
        translateY: '25%',
        opacity: 0,
      }}
      whileInView={{ translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      className={cn('h1 font-[bitter] text-BROWN mb-20', className)}>
      {title}
    </motion.h1>
  );
};

export default PageTitle;

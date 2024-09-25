import clsx from 'clsx';

interface Props {
  odd?: boolean;
  text: string;
  num: number;
}

const AchievmentCol = ({ odd, text, num }: Props) => {
  return (
    <div
      className={clsx('p-4', {
        'bg-BROWN': odd,
        'bg-[#533321]': !odd,
      })}>
      <h4 className="text-[#C5BBB5] text-[16px] mb-4 leading-[130%]">{text}</h4>
      <span className="text-[30px] text-white font-semibold leading-none">{num}</span>
    </div>
  );
};

export default AchievmentCol;

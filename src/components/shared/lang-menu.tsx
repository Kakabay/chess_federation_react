import { useZusLang } from '@/zustand/use-zus-lang';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export const langs = [
  { view: 'Русский', value: 'ru', img: '/images/header/flag-ru.svg' },
  { view: 'English', value: 'en', img: '/images/header/flag-en.svg' },
  { view: 'Türkmen', value: 'tm', img: '/images/header/flag-tm.svg' },
];

const LangMenu = () => {
  const { activeLang } = useZusLang();
  const { setActiveLang } = useZusLang();

  console.log(activeLang);

  return (
    <DropdownMenu
    // value={activeLang.value}
    // onValueChange={(value) => {
    //   const selectedLang = langs.find((lang) => lang.value === value);
    //   if (selectedLang) {
    //     setActiveLang(selectedLang);
    //   }
    // }}
    >
      <DropdownMenuTrigger className="bg-transparent focus:outline-none border-none w-[170px] p-[20px] flex items-center gap-[8px]">
        <img
          src={
            activeLang.value === 'ru'
              ? '/images/header/flag-ru.svg'
              : activeLang.value === 'en'
              ? '/images/header/flag-en.svg'
              : '/images/header/flag-tm.svg'
          }
          alt="flag"
        />
        {activeLang.view}
        <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-HEADER_BG shadow-HEADER_SHADOW">
        {langs
          .filter((item) => item.value !== activeLang.value)
          .map((item, i) => (
            <DropdownMenuItem
              onClick={() => setActiveLang(item)}
              key={i}
              className="cursor-pointer p-[20px]">
              <div className="w-full flex gap-[8px]">
                <div className="flex w-[28px] h-[20px]">
                  <img src={item.img} alt={item.view} />
                </div>

                <h4 className="text-[16px] leading-[120%] font-semibold">{item.view}</h4>
              </div>
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LangMenu;

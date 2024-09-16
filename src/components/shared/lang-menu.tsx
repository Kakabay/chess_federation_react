import { useZusLang } from "@/zustand/use-zus-lang";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const langs = [
  { view: "Русский", value: "ru" },
  { view: "English", value: "en" },
  { view: "Türkmen", value: "tm" },
];

const LangMenu = () => {
  const { activeLang } = useZusLang();
  const { setActiveLang } = useZusLang();

  return (
    <Select
      value={activeLang.value}
      onValueChange={(value) => {
        const selectedLang = langs.find((lang) => lang.value === value);
        if (selectedLang) {
          setActiveLang(selectedLang);
        }
      }}
    >
      <SelectTrigger className="w-[155px] bg-transparent outline-none border-none">
        <img src="/images/home/flag-tm.svg" alt="" />
        <SelectValue>{activeLang.view}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {langs
          .filter((item) => item.value !== activeLang.value)
          .map((item, i) => (
            <SelectItem key={i} value={item.value} className="cursor-pointer">
              {item.view}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default LangMenu;

import Container from "../layout/container";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  const navData = t("nav", { returnObjects: true }) as {
    text: string;
    link: string;
  }[];

  return (
    <footer className="bg-HEADER_BG border-t border-BROWN">
      <Container className="flex md:flex-row flex-col gap-6 md:gap-0 items-center md:items-start py-4 md:pt-5 md:pb-10 md:justify-between font-semibold">
        <div className="flex flex-col gap-5">
          <nav className="flex md:flex-row py-5 flex-col text-center md:text-left md:items-center gap-5 md:gap-10">
            {navData.map((item, i) => (
              <Link key={i} to={item.link}>
                {item.text}
              </Link>
            ))}
          </nav>
          <div className="text-sm md:text-left text-center">{t("name")}</div>
        </div>

        <a
          href="https://www.instagram.com/tkm_chess"
          target="_blank"
          className="flex items-center gap-4 py-5"
        >
          {t("social")}
          <img src="/images/footer/inst.svg" alt="instagram" />
        </a>
      </Container>
    </footer>
  );
};

export default Footer;

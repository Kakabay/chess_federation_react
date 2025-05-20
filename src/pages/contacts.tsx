import Container from "@/components/layout/container";
import Form from "@/components/shared/form";
import PageTitle from "@/components/shared/page-title";
import useExtractSectionTitle from "@/lib/hooks/useExtractSectionTitle";
import { useGetContactInfo } from "@/lib/hooks/useGetContactInfo";
import useScrollToTop from "@/lib/hooks/useScrollToTop";
import { useZusLang } from "@/zustand/use-zus-lang";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  useScrollToTop();
  const activeLang = useZusLang().activeLang;
  const { data } = useGetContactInfo(activeLang.value);

  const formTitle = useExtractSectionTitle("contact_form_title");
  const mapSectionTitle = useExtractSectionTitle(
    "contact_us_page_map_section_title"
  );

  const { t } = useTranslation("contacts");

  return (
    <main className="bg-PAGE_BG">
      <Container className="flex flex-col md:gap-[200px] gap-[72px]">
        <section className="flex flex-col md:flex-row w-full items-start md:justify-between">
          <PageTitle
            title={formTitle}
            className="md:flex-[0_1_50%] flex-auto md:mb-0 mb-12"
          />

          <div className="md:flex-[0_1_50%] w-full">
            <Form />
          </div>
        </section>

        {data && (
          <section>
            <div className="flex flex-col md:flex-row mb-5">
              <h2 className="h2 md:flex-[0_1_50%] w-full">{mapSectionTitle}</h2>

              <div className="flex flex-col md:flex-row md:justify-between md:flex-[0_1_50%] gap-4 md:gap-0 mt-6 md:mt-20">
                <div className="md:flex-[0_1_50%]">
                  <h4 className="h4 font-[bitter] mb-2.5 text-BROWN">
                    {t("address")}
                  </h4>
                  <address className="not-italic leading-[150%]">
                    {data?.data?.[0]?.address}
                  </address>
                </div>
                <div className="flex-[0_1_50%] md:pl-10">
                  <h4 className="h4 font-[bitter]  mb-2.5 text-BROWN">
                    {t("phone")}
                  </h4>
                  <div className="not-italic leading-[150%]">
                    {data?.data?.[0]?.contacts}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d960.0379102526645!2d58.37554612924545!3d37.91802585671859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6ffdca3f21a6e5%3A0x63cc9bd1c5a0b35f!2z0KjQsNGF0LzQsNGC0L3QsNGPINC4INGI0LDRiNC10YfQvdCw0Y8g0YjQutC-0LvQsA!5e1!3m2!1sen!2s!4v1660928532968!5m2!1sen!2s"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        )}
      </Container>
    </main>
  );
};

export default Contacts;

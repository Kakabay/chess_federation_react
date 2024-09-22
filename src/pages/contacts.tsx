import Container from "@/components/layout/container";
import Form from "@/components/shared/form";
import PageTitle from "@/components/shared/page-title";
import useScrollToTop from "@/lib/hooks/useScrollToTop";

const Contacts = () => {
  useScrollToTop();

  return (
    <main className="bg-PAGE_BG">
      <Container className="flex flex-col md:gap-[200px] gap-[72px]">
        <section className="flex flex-col md:flex-row w-full items-start md:justify-between">
          <PageTitle
            title="Свяжитесь с нами"
            className="md:flex-[0_1_50%] flex-auto md:mb-0 mb-12"
          />

          <div className="md:flex-[0_1_50%] w-full">
            <Form />
          </div>
        </section>

        <section>
          <div className="flex flex-col md:flex-row mb-5">
            <h2 className="h2 md:flex-[0_1_50%] w-full">Контакты и адрес</h2>

            <div className="flex flex-col md:flex-row md:justify-between md:flex-[0_1_50%] gap-4 md:gap-0 mt-6 md:mt-20">
              <div className="md:flex-[0_1_50%]">
                <h4 className="h4 font-[bitter] mb-2.5 text-BROWN">Адрес</h4>
                <address className="not-italic leading-[150%]">
                  ул. Ататюрка 80, Ашгабат 744000, Туркменистан
                </address>
              </div>
              <div className="flex-[0_1_50%] md:pl-10">
                <h4 className="h4 font-[bitter]  mb-2.5 text-BROWN">
                  Контакты
                </h4>
                <div className="not-italic leading-[150%]">
                  +993 12 46-87-87{" "}
                </div>
              </div>
            </div>
          </div>

          <img
            src="/images/home/contacts.png"
            alt=""
            className="w-full max-h-[600px] object-cover"
          />
        </section>
      </Container>
    </main>
  );
};

export default Contacts;

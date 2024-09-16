import Container from '@/components/layout/container';
import Form from '@/components/shared/form';
import PageTitle from '@/components/shared/page-title';
import useScrollToTop from '@/lib/hooks/useScrollToTop';

const Contacts = () => {
  useScrollToTop();

  return (
    <main className="bg-PAGE_BG pt-20 pb-[240px]">
      <Container className="flex flex-col gap-[200px]">
        <section className="flex items-start justify-between">
          <PageTitle title="Свяжитесь с нами" className="flex-[0_1_50%]" />

          <div className="flex-[0_1_50%]">
            <Form />
          </div>
        </section>

        <section>
          <div className="flex mb-5">
            <h2 className="h2 flex-[0_1_50%]">Контакты и адрес</h2>

            <div className="flex justify-between flex-[0_1_50%] mt-20">
              <div className="flex-[0_1_50%]">
                <h4 className="h4 font-[bitter] mb-2.5 text-BROWN">Адрес</h4>
                <address className="not-italic leading-[150%]">
                  ул. Ататюрка 80, Ашгабат 744000, Туркменистан
                </address>
              </div>
              <div className="flex-[0_1_50%] pl-10">
                <h4 className="h4 font-[bitter]  mb-2.5 text-BROWN">Контакты</h4>
                <div className="not-italic leading-[150%]">+993 12 46-87-87 </div>
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

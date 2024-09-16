import EventsHero from "@/components/events/events-hero";
import EventsMonth from "@/components/events/events-month";

const Events = () => {
  return (
    <main className="pt-20 pb-[200px] flex flex-col gap-[200px]">
      <EventsHero />

      <section className="flex flex-col gap-[120px]">
        <EventsMonth date="Март 2024 года" />
        <EventsMonth date="Март 2024 года" />
      </section>
    </main>
  );
};

export default Events;

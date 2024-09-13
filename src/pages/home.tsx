import HomeEvents from '@/components/home/home-events';
import HomeNews from '@/components/home/home-news';
import HomeSlider from '@/components/home/home-slider';

const Home = () => {
  return (
    <main className="flex flex-col gap-[120px] pb-[120px] bg-PAGE_BG">
      <HomeSlider />
      <HomeEvents />
      <HomeNews />
    </main>
  );
};

export default Home;

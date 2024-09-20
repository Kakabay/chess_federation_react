import HomeEvents from '@/components/home/home-events';
import HomeGallery from '@/components/home/home-gallery';
import HomeNews from '@/components/home/home-news';
import HomePartners from '@/components/home/home-partners';
import HomeRating from '@/components/home/home-rating';
import HomeSlider from '@/components/home/home-slider';
import useScrollToTop from '@/lib/hooks/useScrollToTop';

const Home = () => {
  useScrollToTop();
  return (
    <main className="flex flex-col gap-[72px] md:gap-[120px] md:pb-[120px] pb-[72px] bg-PAGE_BG">
      <HomeSlider />
      <HomeEvents />
      <HomeNews />
      <HomeGallery />
      <HomeRating />
      <HomePartners />
    </main>
  );
};

export default Home;

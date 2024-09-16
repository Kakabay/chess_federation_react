import HomeEvents from "@/components/home/home-events";
import HomeGallery from "@/components/home/home-gallery";
import HomeNews from "@/components/home/home-news";
import HomePartners from "@/components/home/home-partners";
import HomeRating from "@/components/home/home-rating";
import HomeSlider from "@/components/home/home-slider";

const Home = () => {
  return (
    <main className="flex flex-col gap-[120px] pb-[120px] bg-PAGE_BG">
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

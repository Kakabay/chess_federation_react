import AboutAchievments from "@/components/about/about-achievments";
import AboutHero from "@/components/about/about-hero";
import AboutPersonal from "@/components/about/about-personal";
import AboutPlayer from "@/components/about/about-player";
import AboutStructure from "@/components/about/about-structure";

const About = () => {
  return (
    <main className="flex flex-col gap-[200px] pt-20 pb-[200px]">
      <AboutHero />
      <AboutStructure />
      <AboutAchievments />
      <AboutPersonal />
      <AboutPlayer />
    </main>
  );
};

export default About;

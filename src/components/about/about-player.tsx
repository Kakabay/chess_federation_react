import Container from "../layout/container";

const AboutPlayer = () => {
  return (
    <section>
      <Container>
        <h2 className="h2 mb-10">Вводный видео ролик</h2>

        <video
          src=""
          poster="/images/about/video.png"
          className="w-full max-h-[788px] object-cover"
        />
      </Container>
    </section>
  );
};

export default AboutPlayer;
import { useGetVideos } from '@/lib/hooks/useGetVideos';
import Container from '../layout/container';
import { HOSTING } from '@/lib/constants';

const AboutPlayer = () => {
  const { data } = useGetVideos();
  return (
    <section>
      <Container>
        <h2 className="h2 md:mb-10 mb-6">Вводный видео ролик</h2>

        {data && (
          <video
            src={HOSTING + data[0].video}
            controls
            poster={HOSTING + data[0].poster}
            className="w-full max-h-[788px] object-cover"
          />
        )}
      </Container>
    </section>
  );
};

export default AboutPlayer;

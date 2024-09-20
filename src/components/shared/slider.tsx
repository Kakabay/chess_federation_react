import { ReactNode } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import clsx from 'clsx';

interface Props<T> {
  array: T[];
  renderElement: (item: T, index: number) => ReactNode;
  contentClass?: string;
  itemClass?: string;
  className?: string;
}

const Slider = <T,>({ array, renderElement, contentClass, itemClass, className }: Props<T>) => {
  return (
    <Carousel className={className}>
      <CarouselContent className={contentClass}>
        {array.map((item, i) => (
          <CarouselItem
            className={clsx(itemClass, {
              'mr-4 md:mr-6': i + 1 !== array.length,
            })}>
            {renderElement(item, i)}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Slider;

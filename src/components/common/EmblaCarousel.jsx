'use client';
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import Image from 'next/image';

const EmblaCarousel = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false, // keeps running even if user drags
      speed: 2, // adjust speed (lower = slower, higher = faster)
    }),
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla relative w-full max-w-5xl mx-auto">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((e, index) => (
            <div
              className="embla__slide flex-[0_0_80%] sm:flex-[0_0_40%] lg:flex-[0_0_25%] px-2 p-4"
              key={index + 2}
            >
              <div className=" bg-white rounded-xl border-blue-500 border h-40 flex-col flex items-center justify-center">
                <div className="w-30 h-30 relative">
                  <Image
                    src={e.src}
                    alt="image"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <h5>{e.name}</h5>
                <h5 className="text-blue-500">{e.items} items</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="embla__controls absolute inset-x-0 -bottom-12 flex justify-center gap-4">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};

export default EmblaCarousel;

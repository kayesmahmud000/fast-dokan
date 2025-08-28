// EmblaCarousel.jsx

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
  // Duplicate the slides array to ensure continuous scrolling
  // This is the key change to prevent it from stopping
  const duplicatedSlides = [...slides, ...slides];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false, // keeps running even if user drags
      speed: 1, // adjust speed (lower = slower, higher = faster)
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
    <div className="embla relative w-full max-w-6xl mx-auto">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {duplicatedSlides.map((e, index) => (
            <div
              className="embla__slide flex-[0_0_130px] px-2 py-3 p-4"
              key={index + 2}
            >
              <div className=" bg-white p-4 rounded-xl border-blue-500 border h-[190px] flex-col flex items-center justify-center">
                <div className="w-30 h-30 relative">
                  <Image
                    src={e.src}
                    alt={e.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="130px"
                  />
                </div>
                <h5 className="text-black text-lg font-semibold">{e.name}</h5>
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

"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Image from "next/image";

const EmblaCarousel = ({ slides, options }) => {
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
      .on("autoScroll:play", () => setIsPlaying(true))
      .on("autoScroll:stop", () => setIsPlaying(false))
      .on("reInit", () => setIsPlaying(autoScroll.isPlaying()));
  }, [emblaApi]);

  return (
    <div className="embla relative w-full max-w-6xl mx-auto">
      {/* Viewport */}
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((e, index) => (
            <div
              className="embla__slide flex-[0_0_auto] px-2 p-1 py-3"
              key={index + 2}
            >
              <div className="bg-white rounded-xl border-blue-500 border h-[190px] w-[130px] flex flex-col items-center justify-center">
                <div className="relative w-[80px] h-[80px]">
                  <Image
                    src={e.src}
                    alt="image"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h5 className="text-black text-base font-bold">{e.name}</h5>
                <h5 className="text-blue-500 text-sm">{e.items} items</h5>
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

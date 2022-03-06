import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import clsx from 'clsx';
import { slides } from '../constants';

import notEmpty from '@/src/shared/utils/notEmpty';
import useIsVisible from '@/src/hooks/useIsVisible';
import { SlidesContainer } from '../Slides.styles';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slides = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState('');

  useEffect(() => {
    const observers = slides
      .map(slide => {
        const slideSection = document.getElementById(slide.id);
        const slideImg = document.getElementById(slide.imageId);

        if (slideSection && slideImg) {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setCurrentSlide(entry.target.id);
              }
            });
          });

          observer.observe(slideSection);

          return () => {
            observer.unobserve(slideSection);
          };
        }

        return null;
      })
      .filter(notEmpty);

    return () => {
      observers.forEach(section => section());
    };
  }, []);

  const isVisible = useIsVisible(sectionRef);

  return (
    <SlidesContainer className="bg-slate-900">
      <div className="container py-48 md:py-120 lg:py-160">
        <h2 className="text-white text-5xl font-lato font-bold">
          Life and career
        </h2>
        <div className="relative">
          <div className="sticky flex justify-between mt-160 top-1/2 -translate-y-1/2">
            <div className="w-1/4 flex flex-col justify-center">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className="mb-16"
                  ref={slides.length - 2 === idx ? sectionRef : undefined}
                >
                  <p
                    className={clsx(
                      'text-white',
                      currentSlide === slide.id
                        ? 'font-lato font-bold text-2xl'
                        : 'font-noto font-regular',
                    )}
                    id={slide.titleId}
                  >
                    {slide.title}
                  </p>
                </div>
              ))}
            </div>
            <div
              className={clsx(
                'w-1/3 relative flex items-center transition-opacity',
                isVisible ? 'opacity-1' : 'opacity-0',
              )}
            >
              {slides.map(slide => (
                <div
                  key={slide.id}
                  id={slide.imageId}
                  className={clsx(
                    'absolute transition-opacity w-full',
                    currentSlide === slide.id ? 'opacity-1' : 'opacity-0',
                  )}
                >
                  <Swiper
                    spaceBetween={24}
                    centeredSlides
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                  >
                    {slide.images.map(slideImages => (
                      <SwiperSlide key={slideImages.id}>
                        <Image
                          src={slideImages.img}
                          layout="responsive"
                          loader={({ src }) => src}
                          objectFit="fill"
                          loading="lazy"
                          objectPosition="bottom"
                          quality={100}
                          placeholder="blur"
                          unoptimized
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/3 ml-1/4">
            {slides.map(slide => (
              <div
                key={slide.subtitle}
                className="h-screen flex flex-col justify-center items-start"
              >
                <div id={slide.id}>
                  <p className="text-white text-3xl mb-16 font-lato font-bold">
                    {slide.subtitle}
                  </p>
                  <p className="text-white">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlidesContainer>
  );
};

export default Slides;

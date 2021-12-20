import React, { useEffect } from 'react';
import Image from 'next/image';

import { slides } from './constants';

// eslint-disable-next-line import/extensions
import notEmpty from '@/src/shared/utils/notEmpty';

const Slides = () => {
  useEffect(() => {
    const observers = slides
      .map(slide => {
        const slideSection = document.getElementById(slide.id);
        const slideImg = document.getElementById(slide.imageId);
        const slideTitle = document.getElementById(slide.titleId);

        if (slideSection && slideImg && slideTitle) {
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                slideImg.classList.replace('opacity-0', 'opacity-1');
                slideTitle.classList.replace('font-regular', 'font-black');
              } else {
                slideImg.classList.replace('opacity-1', 'opacity-0');
                slideTitle.classList.replace('font-black', 'font-regular');
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
    // eslint-disable-next-line prettier/prettier

    return () => {
      observers.forEach(section => section());
    };
  }, []);

  return (
    <div className="bg-slate-900">
      <div className="max-w-container-xl mx-auto py-48 lg:py-160">
        <h2 className="text-white text-5xl font-lato font-bold">
          Trayectoria profesional
        </h2>
        <div className="relative">
          <div className="sticky flex justify-between mt-160 top-1/2 -translate-y-1/2">
            <div className="w-1/4 flex flex-col justify-center">
              {slides.map(slide => (
                <div key={slide.id} className="mb-16">
                  <p
                    className="text-white font-noto font-regular"
                    id={slide.titleId}
                  >
                    {slide.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-1/3 relative flex items-center">
              {slides.map(slide => (
                <div
                  key={slide.id}
                  id={slide.imageId}
                  className="absolute opacity-0 transition-opacity w-full"
                >
                  <Image
                    src={slide.image}
                    layout="responsive"
                    loader={({ src }) => src}
                    objectFit="fill"
                    loading="lazy"
                    objectPosition="bottom"
                    quality={100}
                    placeholder="blur"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/4 ml-1/4">
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
    </div>
  );
};

export default Slides;

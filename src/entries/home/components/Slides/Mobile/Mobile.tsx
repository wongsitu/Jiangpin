import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Image from 'next/image';
import clsx from 'clsx';
import { SlidesContainer } from '../Slides.styles';

import notEmpty from '@/src/shared/utils/notEmpty';
import { slides } from '../constants';
import { AlbumContainer } from './Mobile.styles';

const Mobile = () => {
  const [currentSlide, setCurrentSlide] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const observers = slides
      .map(slide => {
        const slideSection = document.getElementById(slide.id);

        if (slideSection) {
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

  return (
    <SlidesContainer>
      <div className="container py-48">
        <h2 className="text-3xl sm:text-5xl font-lato font-bold mb-32 sm:mb-80 text-white">
          {t('SLIDES.TITLE')}
        </h2>
        <div className="sticky top-80 sm:top-200">
          {slides.map(slide => (
            <div
              key={slide.id}
              className={clsx(
                'absolute transition-opacity duration-500',
                currentSlide === slide.id ? 'opacity-1' : 'opacity-0',
              )}
            >
              <p className="text-white text-3xl mb-16 font-lato font-bold">
                {t(slide.subtitle)}
              </p>
              <p className="text-white mb-24 sm:mb-48">
                {t(slide.description)}
              </p>
              <AlbumContainer>
                {slide.images.map(({ id, img }, idx) => (
                  <div key={id} className="absolute flex justify-center w-full">
                    <Image
                      src={img}
                      className={`image${idx + 1}`}
                      layout="intrinsic"
                      loader={({ src }) => src}
                      objectFit="cover"
                      loading="lazy"
                      objectPosition="bottom"
                      quality={100}
                      placeholder="blur"
                      unoptimized
                      height={300}
                      width={500}
                    />
                  </div>
                ))}
              </AlbumContainer>
            </div>
          ))}
        </div>
        {slides.map(slide => (
          <div
            id={slide.id}
            key={slide.id}
            className="flex items-center h-screen"
          >
            <div id={slide.id} />
          </div>
        ))}
      </div>
    </SlidesContainer>
  );
};

export default Mobile;

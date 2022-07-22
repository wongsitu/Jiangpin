import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import {
  HeroBackgroundContainer,
  HeroContainer,
  StyledIntroCard,
} from './Hero.styles';

const Hero = () => {
  const [loaded, setIsLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="relative">
      <HeroBackgroundContainer>
        <div className="absolute inset-0">
          <Image
            src={require('./assets/images/banner3.jpg')}
            id="banner3"
            layout="fill"
            loader={({ src }) => src}
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
            className="z-0"
            quality={100}
            placeholder="blur"
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </div>
        <div className="absolute inset-0">
          <Image
            src={require('./assets/images/banner2.jpg')}
            id="banner2"
            layout="fill"
            loader={({ src }) => src}
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
            className="z-0"
            quality={100}
            placeholder="blur"
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </div>
        <div className="absolute inset-0">
          <Image
            src={require('./assets/images/banner1.webp')}
            id="banner1"
            layout="fill"
            loader={({ src }) => src}
            objectFit="cover"
            loading="lazy"
            objectPosition="center"
            className="z-0"
            quality={100}
            placeholder="blur"
            onLoad={() => {
              setIsLoaded(true);
            }}
          />
        </div>
      </HeroBackgroundContainer>
      <HeroContainer className="absolute inset-0 z-10">
        {loaded && (
          <StyledIntroCard className="container h-full flex items-center">
            <div className="sm:w-1/3 lg:w-1/4">
              <p className="font-noto text-white mb-16">
                {t('HERO.DESCRIPTION')}
              </p>
            </div>
          </StyledIntroCard>
        )}
      </HeroContainer>
    </div>
  );
};

export default Hero;

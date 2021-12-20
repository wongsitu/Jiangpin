import React from 'react';

import Image from 'next/image';

import { HeroContainer } from './Hero.styles';

const Hero = () => (
  <div className="relative">
    <Image
      src={require('./assets/images/banner.webp')}
      layout="responsive"
      loader={({ src }) => src}
      objectFit="fill"
      loading="lazy"
      objectPosition="bottom"
      className="z-0"
      quality={100}
      placeholder="blur"
      unoptimized
    />
    <HeroContainer className="absolute inset-0 z-10">
      <div className="max-w-container-xl mx-auto h-full flex items-center">
        <div className="w-1/4">
          <h1 className="font-smooch text-4xl text-white mb-16">
            Lorem ipsum dolor
          </h1>
          <p className="font-noto text-white mb-16">
            Doloribus quo autem vitae, exercitationem facere, laborum dolorum
            provident sit consequatur quos expedita asperiores recusandae
            voluptatum fugiat.
          </p>
        </div>
      </div>
    </HeroContainer>
  </div>
);

export default Hero;

import React, { FC } from 'react';
import Image from 'next/image';

import { AnimatedBackdrop } from './AnimatedImage.styles';
import { AnimatedImageProps } from './types';

const AnimatedImage: FC<AnimatedImageProps> = ({ src, title, description }) => (
  <div className="relative cursor-pointer">
    <Image
      src={src}
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
    <AnimatedBackdrop className="absolute inset-0 transition-opacity opacity-0 hover:opacity-100 duration-300 z-10 p-24 flex flex-col justify-end">
      <p className="font-lato font-bold text-white">{title}</p>
      <p className="font-noto text-white text-sm">{description}</p>
    </AnimatedBackdrop>
  </div>
);

export default AnimatedImage;

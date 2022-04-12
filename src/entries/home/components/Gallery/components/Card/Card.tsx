import React, { FC } from 'react';

import Image from 'next/image';

import { CardType } from './types';

const Card: FC<CardType> = ({ src, title, description }) => (
  <div className="flex flex-col hover:shadow-lg transition-shadow duration-500 cursor-pointer bg-white h-full">
    <Image
      src={src}
      layout="intrinsic"
      loader={({ src }) => src}
      objectFit="cover"
      loading="lazy"
      objectPosition="center"
      quality={100}
      unoptimized
      height={350}
      width={500}
    />
    <div className="p-24">
      <p className="mb-16 font-lato font-bold text-xl">{title}</p>
      <p className="font-noto text-sm text line-clamp-5">{description}</p>
    </div>
  </div>
);

export default Card;

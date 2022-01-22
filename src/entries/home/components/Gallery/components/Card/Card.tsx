import React from 'react';

import Image from 'next/image';

const Card = ({
  src,
  title,
  description,
}: {
  src: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col hover:shadow-lg transition-shadow duration-500 cursor-pointer">
    <Image
      src={src}
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
    <div className="p-16">
      <p className="mb-16 font-lato font-bold text-xl">{title}</p>
      <p className="font-noto">{description}</p>
    </div>
  </div>
);

export default Card;

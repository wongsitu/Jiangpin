import React, { FC, memo } from 'react';
import Image from 'next/image';

import { PhotoCardProps } from './types';

const PhotoCard: FC<PhotoCardProps> = ({ photo, onClick }) => (
  <button
    key={photo.id}
    type="button"
    className="cursor-pointer"
    onClick={() => {
      onClick(photo);
    }}
  >
    <Image
      src={photo.imageUrl}
      layout="intrinsic"
      loader={({ src }) => src}
      objectFit="cover"
      loading="lazy"
      objectPosition="center"
      quality={100}
      unoptimized
      height={300}
      width={500}
    />
  </button>
);

export default memo(PhotoCard);

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';

import MainMenu from '@/src/shared/components/MainMenu';

import { AlbumContainer } from './gallery.styles';

const albums = [
  {
    title: 'Lorem ipsum dolor.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
    images: [
      {
        key: 'oleo1',
        src: require('./assets/images/oleo/oleo1.webp?url'),
      },
      {
        key: 'oleo2',
        src: require('./assets/images/oleo/oleo2.webp?url'),
      },
      {
        key: 'oleo3',
        src: require('./assets/images/oleo/oleo3.webp?url'),
      },
    ],
  },
  {
    title: 'Adipisicing elit.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
    images: [
      {
        key: 'rice-paper1',
        src: require('./assets/images/rice-paper/rice-paper1.webp?url'),
      },
      {
        key: 'rice-paper2',
        src: require('./assets/images/rice-paper/rice-paper2.webp?url'),
      },
      {
        key: 'rice-paper3',
        src: require('./assets/images/rice-paper/rice-paper3.webp?url'),
      },
    ],
  },
  {
    title: 'Officiis architecto.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
    images: [
      {
        key: 'social1',
        src: require('./assets/images/oleo/oleo1.webp?url'),
      },
      {
        key: 'social2',
        src: require('./assets/images/oleo/oleo2.webp?url'),
      },
      {
        key: 'social3',
        src: require('./assets/images/oleo/oleo3.webp?url'),
      },
    ],
  },
  {
    title: 'Ipsam nam tenetur.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
    images: [
      {
        key: 'notes1',
        src: require('./assets/images/oleo/oleo1.webp?url'),
      },
      {
        key: 'notes2',
        src: require('./assets/images/oleo/oleo2.webp?url'),
      },
      {
        key: 'notes3',
        src: require('./assets/images/oleo/oleo3.webp?url'),
      },
    ],
  },
];

const Gallery = () => (
  <motion.div exit={{ opacity: 0 }}>
    <MainMenu />
    <div className="flex flex-wrap h-screen">
      {albums.map(album => (
        <div key={album.title} className="w-1/2 h-1/2 relative">
          {album.images.map((image, idx) => (
            <AlbumContainer
              className="absolute inset-0 p-32 flex flex-col items-start justify-end"
              key={image.key}
            >
              <Image
                src={image.src}
                className={`image${idx + 1} z-0`}
                layout="fill"
                loader={({ src }) => src}
                objectFit="cover"
                loading="lazy"
                objectPosition="center"
                quality={100}
                placeholder="blur"
              />
              <div className="album-text">
                <p className="text-xl font-lato font-bold mb-16 text-white">
                  {album.title}
                </p>
                <p className="font-noto text-white">{album.description}</p>
              </div>
            </AlbumContainer>
          ))}
        </div>
      ))}
    </div>
  </motion.div>
);

export default Gallery;

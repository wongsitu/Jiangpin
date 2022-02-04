import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  Controller,
} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import clsx from 'clsx';
import Card from './components/Card';

const cards = [
  {
    src: require('./assets/images/rice-paper.webp?url'),
    title: 'Lorem ipsum dolor.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
  },
  {
    src: require('./assets/images/oleo.webp?url'),
    title: 'Adipisicing elit.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
  },
  {
    src: require('./assets/images/social.webp?url'),
    title: 'Ipsam nam tenetur.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
  },
  {
    src: require('./assets/images/notes.webp?url'),
    title: 'Officiis architecto.',
    description:
      'sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda',
  },
];

const Gallery = () => (
  <div className="bg-background relative">
    <div className="container py-48 sm:py-120 lg:py-160">
      <h2 className="text-3xl sm:text-5xl font-lato font-bold mb-32 sm:mb-80">
        Galeria y Proyectos
      </h2>
      <div className="hidden sm:flex flex-wrap xl:flex-nowrap">
        {cards.map(({ src, description, title }, idx) => (
          <div
            className={clsx(
              'sm:w-1/2 sm:mb-24 md:mb-0 lg:pr-0 lg:w-1/4 lg:mr-24',
              idx % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12',
            )}
            key={title}
          >
            <Card
              key={title}
              src={src}
              title={title}
              description={description}
            />
          </div>
        ))}
      </div>
      <div className="flex sm:hidden">
        <Swiper
          spaceBetween={24}
          centeredSlides
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Controller]}
        >
          {cards.map(({ src, description, title }) => (
            <SwiperSlide key={title}>
              <Card src={src} title={title} description={description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);

export default Gallery;

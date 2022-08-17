import React from 'react';
import { useQueryClient } from 'react-query';

import Link from 'next/link';

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

import { useTranslation } from 'react-i18next';
import Card from './components/Card';
import { PaginatedAlbumsResponse } from '@/src/services/albums';

const Gallery = () => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const initialData = queryClient.getQueryState<PaginatedAlbumsResponse>([
    'getAlbums',
    { pageSize: 4 },
  ])?.data;
  const cards = initialData?.results || [];

  return (
    <div className="bg-background relative">
      <div className="container py-48 sm:py-120 lg:py-160">
        <div className="flex items-center justify-between mb-32 sm:mb-80">
          <h2 className="text-3xl sm:text-5xl font-lato font-bold">
            {t('GALLERY.TITLE')}
          </h2>
          <Link href="/gallery">
            <a href="/gallery" className="font-noto hover:font-bold">
              {t('GALLERY.MORE')}
            </a>
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-24">
          {cards.map(({ photos, description, title, slug }) => (
            <div key={title}>
              {photos && (
                <Link href={`/gallery/${slug}/`}>
                  <a href={`/gallery/${slug}/`}>
                    <Card
                      key={title}
                      src={photos[0].imageUrl}
                      title={title}
                      description={description}
                    />
                  </a>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="flex sm:hidden">
          <Swiper
            spaceBetween={24}
            centeredSlides
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Controller]}
          >
            {cards.map(({ photos, description, title }) => (
              <SwiperSlide key={title}>
                {photos && (
                  <Card
                    src={photos[0].imageUrl}
                    title={title}
                    description={description}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

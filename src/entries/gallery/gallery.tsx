import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

import Image from 'next/image';

import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import MainMenu from '@/src/shared/components/MainMenu';

import { AlbumContainer, Background, ImageContainer } from './gallery.styles';
import { fetchAlbums, PaginatedAlbumsResponse } from '@/src/services/albums';

const Gallery = () => {
  const queryClient = useQueryClient();

  const response = queryClient.getQueryData<PaginatedAlbumsResponse>([
    'getAlbums',
  ]);

  return (
    <div>
      <MainMenu />
      <div className="flex flex-wrap h-screen z-10">
        {response?.results?.map(album => (
          <Link key={album.title} href={`/gallery/${album.slug}/`}>
            <a
              href={`/gallery/${album.slug}/`}
              className="w-full h-200 sm:w-1/2 sm:h-1/2 relative"
            >
              <Background className="w-full h-full absolute z-10 p-24 flex items-end">
                <div className="album-text">
                  <p className="text-sm sm:text-xl font-lato font-bold mb-8 sm:mb-16 text-white">
                    {album.title}
                  </p>
                  <p className="text-xs sm:text-sm font-noto text-white description">
                    {album.description}
                  </p>
                </div>
              </Background>
              {album.photos.map((image, idx) => (
                <AlbumContainer key={image.id}>
                  <div className="absolute inset-0 p-32 flex flex-col items-start justify-end z-0">
                    <ImageContainer images={album.photos.length}>
                      <Image
                        src={image.imageUrl}
                        className={`image${idx + 1}`}
                        layout="fill"
                        loader={({ src }) => src}
                        objectFit="cover"
                        loading="lazy"
                        objectPosition="center"
                        quality={100}
                        unoptimized
                      />
                    </ImageContainer>
                  </div>
                </AlbumContainer>
              ))}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getAlbums'], fetchAlbums);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Gallery;

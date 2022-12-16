import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import Link from 'next/link';

import Image from 'next/image';

import { dehydrate, QueryClient } from 'react-query';
import MainMenu from '@/src/shared/components/MainMenu';
import { AlbumsResponse, fetchAlbums } from '@/src/services/albums';
import useAlbums from '@/src/hooks/useAlbums';

import { AlbumContainer, Background, ImageContainer } from './gallery.styles';

const AlbumCard: FC<AlbumsResponse> = album => {
  const { slug, title, description, photos } = album;

  return (
    <Link key={title} href={`/gallery/${slug}/`}>
      <a href={`/gallery/${slug}/`} className="w-full h-360 relative">
        <Background className="w-full h-full absolute z-10 p-24 flex items-end">
          <div className="album-text">
            <p className="text-sm sm:text-xl font-lato font-bold mb-8 sm:mb-16 text-white">
              {title}
            </p>
            <p className="text-xs sm:text-sm font-noto text-white description line-clamp-6 text-ellipsis">
              {description}
            </p>
          </div>
        </Background>
        {photos?.map((image, idx) => (
          <AlbumContainer key={image.id}>
            <div className="absolute inset-0 p-32 flex flex-col items-start justify-end z-0">
              <ImageContainer images={photos.length}>
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
  );
};

const Gallery = () => {
  const {
    albums,
    initialAlbums,
    hasNextPage,
    isFetchingNextPage,
    isError,
    fetchNextPage,
  } = useAlbums();

  const [ref] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    disabled: isError,
    onLoadMore: fetchNextPage,
    rootMargin: '0px 0px 37px 0px',
  });

  return (
    <div>
      <MainMenu notTransparent />
      <div className="container mb-48 mt-96 md:mt-120">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-32">
          {initialAlbums.map(album => (
            <AlbumCard key={album?.id} {...album} />
          ))}
          {albums.map(album => (
            <AlbumCard key={album?.id} {...album} />
          ))}
        </div>
      </div>
      {hasNextPage && <div className="w-full" ref={ref} />}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('getAlbums', fetchAlbums);

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Gallery;

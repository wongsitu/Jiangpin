import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import MainMenu from '@/src/shared/components/MainMenu';
import { fetchPhotos, PaginatedPhotosResponse } from '@/src/services/photos';
import { fetchAlbums } from '@/src/services/albums';

const AlbumDetail = () => {
  const queryClient = useQueryClient();

  const response = queryClient.getQueryData<PaginatedPhotosResponse>([
    'getPhotos',
  ]);

  return (
    <div>
      <MainMenu notTransparent />
      <div className="container mb-48 mt-96 md:mt-120">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-32">
          {response?.results.map(photo => (
            <Image
              key={photo.id}
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
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const queryClient = new QueryClient();

  const result = await queryClient.fetchQuery(['getAlbums'], fetchAlbums);
  const paths = result.results.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queryClient = new QueryClient();

  const { slug } = params as { slug: string };

  try {
    await queryClient.prefetchQuery(['getPhotos'], () => fetchPhotos({ slug }));

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
      notFound: true,
    };
  }
};

export default AlbumDetail;

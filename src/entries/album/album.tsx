import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
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
      <MainMenu />
      {JSON.stringify(response)}
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

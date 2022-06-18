import React, { useCallback, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { GetStaticProps, GetStaticPaths } from 'next';

import { useRouter } from 'next/router';
import { dehydrate, QueryClient } from 'react-query';
import MainMenu from '@/src/shared/components/MainMenu';
import { fetchPhotos, PhotosResponse } from '@/src/services/photos';
import { fetchAlbums } from '@/src/services/albums';
import usePhotos from '@/src/hooks/usePhotos';

import PhotoDialog from './components/PhotoDialog';
import PhotoCard from './components/PhotoCard';

const AlbumDetail = () => {
  const [{ photo, open }, setPhotoDialogState] = useState<{
    photo?: PhotosResponse;
    open?: boolean;
  }>({ photo: undefined, open: false });
  const {
    photos,
    initialPhotos,
    hasNextPage,
    isFetchingNextPage,
    isError,
    fetchNextPage,
  } = usePhotos();
  const router = useRouter();

  const [ref] = useInfiniteScroll({
    loading: isFetchingNextPage,
    hasNextPage: !!hasNextPage,
    disabled: isError,
    onLoadMore: fetchNextPage,
    rootMargin: '0px 0px 37px 0px',
  });

  const onClick = useCallback(
    (photo: PhotosResponse) =>
      setPhotoDialogState(state => ({ ...state, photo, open: true })),
    [],
  );

  return (
    <div>
      <MainMenu notTransparent />
      <div className="container mb-48 mt-96 md:mt-120">
        <button
          type="button"
          className="font-noto hover:font-bold mb-32"
          onClick={() => router.back()}
        >
          Go Back
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-32">
          {initialPhotos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} onClick={onClick} />
          ))}
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} onClick={onClick} />
          ))}
        </div>
        {hasNextPage && <div className="w-full" ref={ref} />}
      </div>
      <PhotoDialog
        open={open}
        photo={photo}
        onDismiss={() =>
          setPhotoDialogState(state => ({ ...state, open: false }))
        }
        onFadeOut={() =>
          setPhotoDialogState(state => ({ ...state, photo: undefined }))
        }
      />
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
    await queryClient.prefetchQuery(['getPhotos', slug], ({ queryKey }) =>
      fetchPhotos({ slug: queryKey[1] }),
    );

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    };
  } catch (err) {
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      notFound: true,
    };
  }
};

export default AlbumDetail;

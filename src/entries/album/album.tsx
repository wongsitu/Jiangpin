import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { GetStaticProps, GetStaticPaths } from 'next';

import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQueryClient } from 'react-query';
import { t } from 'i18next';
import MainMenu from '@/src/shared/components/MainMenu';
import { fetchPhotos, PhotosResponse } from '@/src/services/photos';
import { fetchAlbums, PaginatedAlbumsResponse } from '@/src/services/albums';
import usePhotos from '@/src/hooks/usePhotos';

import PhotoDialog from './components/PhotoDialog';
import PhotoCard from './components/PhotoCard';
import ArrowLeft from '@/src/icons/ArrowLeft';

const AlbumDetail = () => {
  const { i18n } = useTranslation();
  const queryClient = useQueryClient();
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
  const { slug } = router.query as { slug: string };

  const album = queryClient.getQueryState<PaginatedAlbumsResponse>([
    'getAlbum',
    { slug },
  ])?.data;

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
          className="font-noto hover:font-bold mb-32 flex items-center"
          onClick={() => router.back()}
        >
          <ArrowLeft className="mr-8" />
          {t('GO_BACK')}
        </button>
        <h1 className="text-3xl font-lato font-bold mb-16">
          {
            {
              es: album?.results[0]?.title,
              en: album?.results[0]?.titleEn,
              zh: album?.results[0]?.titleEn,
            }[i18n.language]
          }
        </h1>
        <p className="text-noto mb-32">
          {
            {
              es: album?.results[0]?.description,
              en: album?.results[0]?.descriptionEn,
              zh: album?.results[0]?.descriptionCn,
            }[i18n.language]
          }
        </p>
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

    await queryClient.fetchQuery(['getAlbum', { slug }], fetchAlbums);

    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      revalidate: 3600,
    };
  } catch (err) {
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
      notFound: true,
      revalidate: 3600,
    };
  }
};

export default AlbumDetail;

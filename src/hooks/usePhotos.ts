import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery,
  useQueryClient,
} from 'react-query';
import { useRouter } from 'next/router';
import apiClient from '@/src/services/apiClient';
import notEmpty from '../shared/utils/notEmpty';
import { PaginatedPhotosResponse } from '../services/photos';

const resource = '/api/photos/';

const getPhotos: QueryFunction<PaginatedPhotosResponse, QueryKey> = async ({
  queryKey,
  pageParam,
}) => {
  const [, variables] = queryKey as [unknown, { slug: string }];

  const response = await apiClient.get(pageParam || resource, {
    params: variables,
  });

  return response.data;
};

const usePhotos = () => {
  const router = useRouter();
  const { slug } = router.query as { slug: string };
  const queryClient = useQueryClient();
  const initialData =
    queryClient.getQueryState<PaginatedPhotosResponse>('getPhotos')?.data;

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<PaginatedPhotosResponse>(
    [resource, { slug }],
    getPhotos,
    {
      initialData: initialData
        ? {
            pageParams: [initialData?.next],
            pages: [initialData],
          }
        : undefined,
      getNextPageParam: lastPage => lastPage?.next ?? undefined,
      getPreviousPageParam: firstPage => firstPage?.previous ?? undefined,
      keepPreviousData: false,
      enabled: !!slug && !!initialData?.next,
    },
  );

  const photos = data?.pages.flatMap(el => el?.results).filter(notEmpty) || [];
  const initialPhotos = initialData?.results || [];

  return {
    photos,
    isLoading,
    isError,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    initialPhotos,
  };
};

export default usePhotos;

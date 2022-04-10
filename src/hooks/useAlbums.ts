import {
  QueryFunction,
  QueryKey,
  useInfiniteQuery,
  useQueryClient,
} from 'react-query';
import { PaginatedAlbumsResponse } from '@/src/services/albums';
import apiClient from '@/src/services/apiClient';

const resource = '/api/albums/';

const getAlbums: QueryFunction<PaginatedAlbumsResponse, QueryKey> = async ({
  pageParam,
}) => (await apiClient.get(pageParam || resource)).data;

const useAlbums = () => {
  const queryClient = useQueryClient();
  const initialData =
    queryClient.getQueryState<PaginatedAlbumsResponse>('getAlbums')?.data;

  const {
    data,
    isLoading,
    isError,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteQuery<PaginatedAlbumsResponse>([resource], getAlbums, {
    initialData: initialData
      ? {
          pageParams: [initialData?.next],
          pages: [initialData],
        }
      : undefined,
    getNextPageParam: lastPage => lastPage?.next ?? undefined,
    getPreviousPageParam: firstPage => firstPage?.previous ?? undefined,
    keepPreviousData: false,
    enabled: !!initialData?.next,
  });

  const albums = data?.pages.flatMap(el => el.results) || [];
  const initialAlbums = initialData ? initialData.results : [];

  return {
    albums,
    initialAlbums,
    isLoading,
    isError,
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  };
};

export default useAlbums;

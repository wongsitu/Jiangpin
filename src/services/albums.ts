import { QueryFunction, QueryKey } from 'react-query';
import apiClient from './apiClient';
import { PaginatedResult } from './types';
import { PhotosResponse } from './photos';

export type AlbumsResponse = {
  id: number;
  slug: string;
  title: string;
  titleEn: string;
  titleCn: string;
  subtitle: string;
  description: string;
  descriptionEn: string;
  descriptionCn: string;
  updatedAt: string;
  publicationDate: string;
  photos?: PhotosResponse[];
};

export type PaginatedAlbumsResponse = PaginatedResult<AlbumsResponse>;

type AlbumsVariables = {
  slug: string;
  pageSize?: number;
};

export const fetchAlbums: QueryFunction<
  PaginatedAlbumsResponse,
  QueryKey
> = async ({ queryKey }) => {
  const [, variables] = queryKey as [unknown, AlbumsVariables | undefined];

  return apiClient
    .get<PaginatedAlbumsResponse>('/api/albums/', {
      params: { ...variables },
    })
    .then(res => res.data);
};

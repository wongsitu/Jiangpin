import apiClient from './apiClient';
import { PaginatedResult } from './types';
import { PhotosResponse } from './photos';

export type AlbumsResponse = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  updatedAt: string;
  publicationDate: string;
  photos: PhotosResponse[];
};

export type PaginatedAlbumsResponse = PaginatedResult<AlbumsResponse>;

export const fetchAlbums = async () =>
  apiClient.get<PaginatedAlbumsResponse>('/api/albums/').then(res => res.data);

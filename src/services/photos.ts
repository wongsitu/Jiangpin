import apiClient from './apiClient';
import { PaginatedResult } from './types';

export type PhotosResponse = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  publicationDate: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
};

type PhotoVariables = {
  slug: string;
  pageSize?: number;
  isThumbnail?: boolean;
};

export type PaginatedPhotosResponse = PaginatedResult<PhotosResponse>;

export const fetchPhotos = async (variables: PhotoVariables) =>
  apiClient
    .get<PaginatedResult<PaginatedPhotosResponse>>('/api/photos/', {
      params: variables,
    })
    .then(res => res.data);

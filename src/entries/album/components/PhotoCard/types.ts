import { PhotosResponse } from '@/src/services/photos';

export type PhotoCardProps = {
  photo: PhotosResponse;
  // eslint-disable-next-line no-unused-vars
  onClick: (photo: PhotosResponse) => void;
};

import { PhotosResponse } from '@/src/services/photos';

export type PhotoDialogProps = {
  open?: boolean;
  photo?: PhotosResponse;
  onDismiss?: () => void;
  onFadeOut?: () => void;
};

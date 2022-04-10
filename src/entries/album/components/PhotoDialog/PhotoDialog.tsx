import React, { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { Dialog } from '@/src/shared/ui/Dialog';
import { PhotoDialogProps } from './types';

const PhotoDialog: FC<PhotoDialogProps> = ({
  open,
  onDismiss,
  onFadeOut,
  photo,
}) => {
  const { colors, screens } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: screens.sm });

  return (
    <Dialog
      open={open}
      onDismiss={onDismiss}
      onFadeOut={onFadeOut}
      bgColor={colors.transparent}
      size={isDesktop ? 'm' : 'l'}
    >
      {photo && (
        <Image
          src={photo?.imageUrl}
          layout="responsive"
          loader={({ src }) => src}
          objectFit="contain"
          loading="lazy"
          objectPosition="center"
          quality={100}
          height="100%"
          width="100%"
        />
      )}
    </Dialog>
  );
};

export default PhotoDialog;

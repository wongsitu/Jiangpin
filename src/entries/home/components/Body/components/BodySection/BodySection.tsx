import React, { FC, useRef } from 'react';

import clsx from 'clsx';
import { BodySectionProps } from './types';
import AnimatedImage from '@/src/shared/components/AnimatedImage';
import useIsVisible from '@/src/hooks/useIsVisible';

const BodySection: FC<BodySectionProps> = ({
  idx,
  image,
  title,
  description,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <div
      className={clsx(
        'flex items-center mb-120 transition-all duration-700',
        idx % 2 === 0 && 'flex-row-reverse',
        isVisible ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-1/4',
      )}
      ref={sectionRef}
    >
      <div
        className={clsx(
          'w-1/2',
          idx % 2 === 0 ? 'sm:pl-24 lg:pl-48' : 'sm:pr-24 lg:pr-48',
        )}
      >
        <h2 className="font-lato font-bold text-3xl mb-16">{title}</h2>
        <p className="font-noto">{description}</p>
      </div>
      <div
        className={clsx(
          'w-1/2',
          idx % 2 === 0 ? 'sm:pr-24 lg:pr-48' : 'sm:pl-24 lg:pl-48',
        )}
      >
        <AnimatedImage {...image} />
      </div>
    </div>
  );
};

export default BodySection;

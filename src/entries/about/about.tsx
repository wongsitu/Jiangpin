import React from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MainMenu from '@/src/shared/components/MainMenu';

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      <MainMenu notTransparent />
      <div className="container mb-48 mt-96 md:mt-120">
        <div className="mb-32">
          <p className="text-justify">
            <div className="float-left mr-16">
              <Image
                src={require('./assets/profile.jpg')}
                layout="intrinsic"
                loader={({ src }) => src}
                objectFit="cover"
                loading="lazy"
                objectPosition="center"
                quality={100}
                unoptimized
                height={180}
                width={180}
              />
            </div>
            {t('ABOUT.INTRO')}
          </p>
        </div>
        <div className="mb-32">
          <h2 className="text-3xl font-lato font-bold">
            {t('ABOUT.HONORABLE_MENTIONS')}
          </h2>
        </div>
        <div className="mb-32">
          <h2 className="text-3xl font-lato font-bold">
            {t('ABOUT.INDIVIDUAL_PRESENTATIONS')}
          </h2>
        </div>
        <div className="mb-32">
          <h2 className="text-3xl font-lato font-bold">
            {t('ABOUT.COLECTIVE_PRESENTATIONS')}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;

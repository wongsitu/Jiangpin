import React from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MainMenu from '@/src/shared/components/MainMenu';
import {
  collectiveExhibitions,
  honorableMentions,
  individualExhibitions,
} from './constants';

const About = () => {
  const { t, i18n } = useTranslation();

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
          <h2 className="text-3xl font-lato font-bold mb-16">
            {t('ABOUT.HONORABLE_MENTIONS')}
          </h2>
          <ul className="list-disc ml-20">
            {honorableMentions.map(el => (
              <li key={el.title} className="mb-16">
                <p className="text-noto font-bold">
                  {el.title}, {el.institution}, {t(el.location as any)}{' '}
                  {el.year}
                </p>
                <p className="text-noto">
                  {el[i18n.language as keyof typeof el]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-32">
          <h2 className="text-3xl font-lato font-bold mb-16">
            {t('ABOUT.INDIVIDUAL_PRESENTATIONS')}
          </h2>
          <ul className="list-disc  ml-20">
            {individualExhibitions.map(el => (
              <li key={el.title} className="mb-16">
                <p className="text-noto font-bold">
                  {el.title}, {el.institution}, {t(el.location as any)}{' '}
                  {el.year}
                </p>
                <p className="text-noto">
                  {el[i18n.language as keyof typeof el]}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-32">
          <h2 className="text-3xl font-lato font-bold mb-16">
            {t('ABOUT.COLECTIVE_PRESENTATIONS')}
          </h2>
          <ul className="list-disc  ml-20">
            {collectiveExhibitions.map(el => (
              <li key={el.title} className="mb-16">
                <p className="text-noto font-bold">
                  {el.title && `${el.title},`}{' '}
                  {el.institution && `${el.institution},`}{' '}
                  {t(el.location as any)} {el.year}
                </p>
                <p className="text-noto">
                  {el[i18n.language as keyof typeof el]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

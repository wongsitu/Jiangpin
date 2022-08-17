import React from 'react';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MainMenu from '@/src/shared/components/MainMenu';
import { Container, DataContainer } from './contact.styles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container className="bg-background">
      <MainMenu />
      <div className="container pb-48 pt-96 md:pt-120 h-screen">
        <div className="flex flex-col sm:flex-row items-center h-full">
          <div className="w-full absolute inset-0 -z-10">
            <Image
              src={require('./assets/images/profile.webp')}
              layout="fill"
              loader={({ src }) => src}
              objectFit="cover"
              loading="lazy"
              quality={100}
              unoptimized
            />
          </div>
          <div className="w-full sm:w-1/3 flex justify-center items-end sm:items-center h-full ml-auto">
            <DataContainer className="p-8 sm:p-24 shadow-lg w-full bg-background">
              <h2 className="text-2xl font-lato font-bold mb-16">
                {t('CONTACT_US.TITLE')}
              </h2>
              <div>
                <span className="font-noto font-bold mr-4">Email:</span>
                <span className="font-noto">xxxxx@xxxx.com</span>
              </div>
              <div>
                <span className="font-noto font-bold mr-4">WeChat:</span>
                <span className="font-noto">xxx-xxx-xxx</span>
              </div>
              <div>
                <span className="font-noto font-bold mr-4">Whatssap:</span>
                <span className="font-noto">xxx-xxx-xxx</span>
              </div>
              <div>
                <span className="font-noto font-bold mr-4">Facebook:</span>
                <span className="font-noto">xxx-xxx-xxx</span>
              </div>
            </DataContainer>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;

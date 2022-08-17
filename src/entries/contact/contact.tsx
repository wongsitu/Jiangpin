import React from 'react';

import Image from 'next/image';
import MainMenu from '@/src/shared/components/MainMenu';
import { Container, DataContainer } from './contact.styles';

const Contact = () => (
  <Container className="bg-background">
    <MainMenu />
    <div className="container pb-48 pt-96 md:pt-120 h-screen">
      <div className="flex items-center h-full">
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
        <div className="w-1/3 flex justify-center items-center h-full ml-auto">
          <DataContainer className="p-16 shadow-lg w-full bg-background">
            <h2 className="text-2xl font-lato font-bold mb-16">
              Datos de contacto
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              modi perferendis quis dolores reiciendis nam obcaecati asperiores,
              consectetur tempora possimus dolorum error harum fugit itaque
              voluptatum ab? Voluptas, et iure?
            </p>
          </DataContainer>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;

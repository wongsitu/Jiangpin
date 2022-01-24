import React from 'react';

import { ImagesContainer } from './Gallery.styles';

import Card from './components/Card';

const Gallery = () => (
  <div className="bg-background">
    <div className="container py-48 md:py-120 lg:py-160 h-screen">
      <h2 className="text-5xl font-lato font-bold mb-80">
        Galeria y Proyectos
      </h2>
      <ImagesContainer>
        <div className="w-1/4 mr-24">
          <Card
            src={require('./assets/images/rice-paper.webp?url')}
            title="Lorem ipsum dolor."
            description="sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda"
          />
        </div>
        <div className="w-1/4 mr-24">
          <Card
            src={require('./assets/images/oleo.webp?url')}
            title="Lorem ipsum dolor."
            description="sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda"
          />
        </div>
        <div className="w-1/4 mr-24">
          <Card
            src={require('./assets/images/social.webp?url')}
            title="Lorem ipsum dolor."
            description="sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda"
          />
        </div>
        <div className="w-1/4">
          <Card
            src={require('./assets/images/notes.webp?url')}
            title="Lorem ipsum dolor."
            description="sit amet consectetur adipisicing elit. Ipsam nam tenetur officiis architecto, beatae voluptatibus assumenda"
          />
        </div>
      </ImagesContainer>
    </div>
  </div>
);

export default Gallery;

import React from 'react';

import { ImagesContainer } from './Gallery.styles';

const Gallery = () => (
  <div className="bg-background">
    <div className="container py-48 lg:py-160 h-screen">
      <h2 className="text-5xl font-lato font-bold mb-80">
        Galeria y Proyectos
      </h2>
      <ImagesContainer>
        <div className="w-200">oleo</div>
        <div className="w-200">rice paper</div>
        <div className="w-200">social</div>
        <div className="w-200">notes</div>
      </ImagesContainer>
    </div>
  </div>
);

export default Gallery;

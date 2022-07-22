export const sections = [
  {
    id: 'body-section1',
    image: {
      src: require('./assets/images/image1.webp'),
      description: 'BODY.IMAGE_DESCRIPTION1',
    },
    description: 'BODY.DESCRIPTION1',
  },
  {
    id: 'body-section2',
    image: {
      src: require('./assets/images/image2.webp'),
      description: 'BODY.IMAGE_DESCRIPTION2',
    },
    description: 'BODY.DESCRIPTION2',
  },
  {
    id: 'body-section3',
    image: {
      src: require('./assets/images/image3.webp'),
      description: 'BODY.IMAGE_DESCRIPTION3',
    },
    description: 'BODY.DESCRIPTION3',
  },
] as const;

import React from 'react';
import Image from 'next/image';

const Body = () => (
  <div className="bg-background">
    <div className="max-w-container-xl mx-auto py-48 lg:py-160">
      <div className="flex items-center mb-120">
        <div className="w-1/2 pr-48">
          <h2 className="font-lato font-bold text-3xl mb-16">
            Lorem ipsum dolor.
          </h2>
          <p className="font-noto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nam
            tenetur officiis architecto, beatae voluptatibus assumenda pariatur
            numquam dolorum repellendus dolor excepturi quis commodi veniam eum
            aut expedita quaerat accusamus.
          </p>
        </div>
        <div className="w-1/2 pl-48">
          <Image
            src={require('./assets/images/image1.webp')}
            layout="responsive"
            loader={({ src }) => src}
            objectFit="fill"
            loading="lazy"
            objectPosition="bottom"
            className="z-0"
            quality={100}
            placeholder="blur"
            unoptimized
          />
        </div>
      </div>
      <div className="flex items-center mb-120">
        <div className="w-1/2 pr-48">
          <Image
            src={require('./assets/images/image2.webp')}
            layout="responsive"
            loader={({ src }) => src}
            objectFit="fill"
            loading="lazy"
            objectPosition="bottom"
            className="z-0"
            quality={100}
            placeholder="blur"
            unoptimized
          />
        </div>
        <div className="w-1/2 pl-48">
          <h2 className="font-lato font-bold text-3xl mb-16">
            Lorem ipsum dolor.
          </h2>
          <p className="font-noto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nam
            tenetur officiis architecto, beatae voluptatibus assumenda pariatur
            numquam dolorum repellendus dolor excepturi quis commodi veniam eum
            aut expedita quaerat accusamus.
          </p>
        </div>
      </div>
      <div className="flex items-center mb-120">
        <div className="w-1/2 pr-48">
          <h2 className="font-lato font-bold text-3xl mb-16">
            Lorem ipsum dolor.
          </h2>
          <p className="font-noto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nam
            tenetur officiis architecto, beatae voluptatibus assumenda pariatur
            numquam dolorum repellendus dolor excepturi quis commodi veniam eum
            aut expedita quaerat accusamus.
          </p>
        </div>
        <div className="w-1/2 pl-48">
          <Image
            src={require('./assets/images/image3.webp')}
            layout="responsive"
            loader={({ src }) => src}
            objectFit="fill"
            loading="lazy"
            objectPosition="bottom"
            className="z-0"
            quality={100}
            placeholder="blur"
            unoptimized
          />
        </div>
      </div>
    </div>
  </div>
);

export default Body;

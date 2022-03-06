import React from 'react';

import BodySection from './components/BodySection';
import { sections } from './constants';

const Body = () => (
  <div className="bg-background">
    <div className="container py-48 md:py-120 lg:py-160">
      {sections.map(({ description, id, title, image }, idx) => (
        <BodySection
          key={id}
          idx={idx}
          title={title}
          description={description}
          image={image}
        />
      ))}
    </div>
  </div>
);

export default Body;

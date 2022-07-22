import React from 'react';
import { useTranslation } from 'react-i18next';

import BodySection from './components/BodySection';
import { sections } from './constants';

const Body = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-background">
      <div className="container py-48 md:py-120 lg:py-160">
        {sections.map(({ description, id, image }, idx) => (
          <BodySection
            key={id}
            idx={idx}
            description={t(description)}
            image={{ ...image, description: t(image.description) }}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';

import Desktop from './Desktop';
import Mobile from './Mobile';

const Slides = () => {
  const { screens } = useTheme();
  const isDesktop = useMediaQuery({ minWidth: screens.lg });

  return isDesktop ? <Desktop /> : <Mobile />;
};

export default Slides;

import React from 'react';
import { motion } from 'framer-motion';
import MainMenu from '@/src/shared/components/MainMenu';

const Gallery = () => (
  <motion.div exit={{ opacity: 0 }}>
    <MainMenu />
  </motion.div>
);

export default Gallery;

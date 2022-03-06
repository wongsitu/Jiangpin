import dynamic from 'next/dynamic';

const DynamicSlides = dynamic(() => import('./Slides'), { ssr: false });

export default DynamicSlides;

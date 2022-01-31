import dynamic from 'next/dynamic';

const DynamicGallery = dynamic(() => import('./gallery'), { ssr: false });

export default DynamicGallery;

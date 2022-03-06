import dynamic from 'next/dynamic';

const DynamicGallery = dynamic(() => import('./Gallery'), { ssr: false });

export default DynamicGallery;

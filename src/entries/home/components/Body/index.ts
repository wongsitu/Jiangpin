import dynamic from 'next/dynamic';

const DynamicBody = dynamic(() => import('./Body'), { ssr: false });

export default DynamicBody;

import dynamic from 'next/dynamic';

export const Dialog = dynamic(() => import('./Dialog'), { ssr: false });
export * from './types';

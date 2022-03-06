import apiClient from './apiClient';

export const fetchAlbums = async () =>
  apiClient.get('/api/albums/').then(res => res.data);

import { getPlaiceholder as getPlaiceholderFn } from 'plaiceholder';

export const getPlaiceholder = (path: string) => {
  let url = '';

  try {
    getPlaiceholderFn(path).then(({ base64 }) => {
      url = base64;
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return url;
};

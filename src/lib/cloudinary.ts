const CLOUD = 'dkqocgknd';
const FOLDER = 'lp-green-coffee';

export const img = (name: string, width = 1200): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},e_improve/${FOLDER}/${name}`;

export const imgDark = (name: string, width = 1200): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},e_improve,e_brightness:-15/${FOLDER}/${name}`;

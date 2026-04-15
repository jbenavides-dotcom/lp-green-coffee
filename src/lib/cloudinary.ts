const CLOUD = 'dkqocgknd';
const FOLDER = 'lp-green-coffee';

export const img = (name: string, width = 1200): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},e_improve/${FOLDER}/${name}`;

export const imgDark = (name: string, width = 1200): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},e_improve,e_brightness:-15/${FOLDER}/${name}`;

// Crop top portion only - removes pink/colored bottom strip
export const imgCard = (name: string, width = 600): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_crop,g_north,h_0.65/${FOLDER}/${name}`;

// Crop focusing on left side (for La Amistad)
export const imgLeft = (name: string, width = 1200): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_fill,g_west,ar_4:5,e_improve/${FOLDER}/${name}`;

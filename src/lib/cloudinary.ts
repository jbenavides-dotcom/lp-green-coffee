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

// Pad with cream bg to preserve full image design (no crop)
export const imgPad = (name: string, width = 1200, ar = '16:10', bg = 'FCF7EC'): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_pad,ar_${ar},b_rgb:${bg},e_improve/${FOLDER}/${name}`;

// Fill crop with center gravity at custom aspect ratio
export const imgCrop = (name: string, width = 1200, ar = '16:10'): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_fill,g_center,ar_${ar},e_improve/${FOLDER}/${name}`;

// Fill crop with automatic gravity (AI-detected focal point)
export const imgFillAuto = (name: string, width = 1200, ar = '16:10'): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_fill,g_auto,ar_${ar},e_improve/${FOLDER}/${name}`;

/**
 * Trim automático de bordes de color uniforme.
 * tolerance: 0-100 (más alto = más agresivo al considerar colores "similares")
 */
export const imgTrim = (name: string, width = 900, tolerance = 20): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},e_trim:${tolerance}/${FOLDER}/${name}`;

/**
 * Crop manual por coordenadas. Útil cuando e_trim no detecta el borde correctamente.
 * x, y, w, h en píxeles sobre la imagen nativa.
 */
export const imgCropBox = (
  name: string,
  x: number,
  y: number,
  w: number,
  h: number,
  width = 900
): string =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto,w_${width},c_crop,x_${x},y_${y},w_${w},h_${h}/${FOLDER}/${name}`;

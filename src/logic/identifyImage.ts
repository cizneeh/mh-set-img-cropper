import { ImageCategory } from './imageCategory'

/** Determine image category based on pixels */
export function identifyImage(img: ImageData): ImageCategory {
  const { data, width, height } = img

  console.log(data, width, height)
  // TODO: implement
  return 'skills'
}

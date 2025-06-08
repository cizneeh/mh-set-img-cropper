import { type ImageCategory, getCropParams } from './imageCategory'

/**
 * Extract an icon from given context.
 */
export async function cropImage(
  sourceImage: OffscreenCanvas | HTMLImageElement,
  category: ImageCategory,
): Promise<string> {
  const { sx, sy, sWidth, sHeight } = getCropParams(category)

  // TODO: widthとheightの決め方
  // でも組み合わせて使うときにはサイズぴったりじゃないとなぁ
  const canvas = new OffscreenCanvas(sWidth, sHeight)
  const ctx = canvas.getContext('2d')
  if (ctx == null) throw new Error('Canvas Error')

  ctx.drawImage(sourceImage, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight)

  const blob = await canvas.convertToBlob()
  if (!blob) throw new Error('Blob Error')
  return URL.createObjectURL(blob)
}

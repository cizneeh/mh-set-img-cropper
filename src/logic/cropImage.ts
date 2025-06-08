import { ImageCategory, getCropParams } from './imageCategory'

/**
 * Extract an icon from given context.
 */
export async function cropImage(
  sourceImage: OffscreenCanvas,
  category: ImageCategory,
): Promise<string> {
  const { sx, sy, sWidth, sHeight } = {
    sx: 1520,
    sy: 260,
    sWidth: 360,
    sHeight: 610,
  }

  // スキル2つ
  const kaii = {
    sx: 1522,
    sy: 226,
    sWidth: 358,
    sHeight: 303,
  }

  // TODO: widthとheightの決め方
  // でも組み合わせて使うときにはサイズぴったりじゃないとなぁ
  if (category === 'skills') {
    const canvas = new OffscreenCanvas(sWidth, sHeight)
    const ctx = canvas.getContext('2d')
    if (ctx == null) throw new Error('Canvas Error')
    ctx.drawImage(sourceImage, sx, sy, sWidth, sHeight, 0, 0, sWidth, sHeight)
    const blob = await canvas.convertToBlob()
    return URL.createObjectURL(blob)
  }
  if (category === 'armor_head') {
    const ori = {
      sx: 1100,
      sy: 320,
      sWidth: 358,
      sHeight: 68,
    }
    return cropArmor(sourceImage, ori, kaii)
  }
  if (category === 'armor_chest') {
    const ori = {
      sx: 1100,
      sy: 403,
      sWidth: 358,
      sHeight: 68,
    }
    // スキル1つ、耐性あり
    return cropArmor(sourceImage, ori, { ...kaii, sHeight: 226 })
  }
  if (category === 'armor_arms') {
    const ori = {
      sx: 1100,
      sy: 486,
      sWidth: 358,
      sHeight: 68,
    }
    return cropArmor(sourceImage, ori, { ...kaii, sHeight: 190 })
  }
  if (category === 'armor_waist') {
    const ori = {
      sx: 1100,
      sy: 569,
      sWidth: 358,
      sHeight: 68,
    }
    return cropArmor(sourceImage, ori, { ...kaii, sHeight: 190 })
  }
  if (category === 'armor_legs') {
    const ori = {
      sx: 1100,
      sy: 652,
      sWidth: 358,
      sHeight: 68,
    }
    return cropArmor(sourceImage, ori, { ...kaii, sHeight: 300 })
  }
  if (category === 'charm') {
    const ori = {
      sx: 1522,
      sy: 215,
      sWidth: 358,
      sHeight: 485,
    }
    const canvas = new OffscreenCanvas(sWidth, sHeight)
    const ctx = canvas.getContext('2d')
    if (ctx == null) throw new Error('Canvas Error')
    ctx.drawImage(
      sourceImage,
      ori.sx,
      ori.sy,
      ori.sWidth,
      ori.sHeight,
      0,
      0,
      ori.sWidth,
      ori.sHeight,
    )
    const blob = await canvas.convertToBlob()
    return URL.createObjectURL(blob)
  }
  return 'unknown'
}

async function cropArmor(
  sourceImage: OffscreenCanvas,
  ori: {
    sx: number
    sy: number
    sWidth: number
    sHeight: number
  },
  kaii: {
    sx: number
    sy: number
    sWidth: number
    sHeight: number
  },
) {
  const neccessaryWidth = ori.sWidth
  const neccessaryHeight = ori.sHeight + kaii.sHeight
  const canvas = new OffscreenCanvas(neccessaryWidth, neccessaryHeight)
  const ctx = canvas.getContext('2d')
  if (ctx == null) throw new Error('Canvas Error')
  ctx.drawImage(
    sourceImage,
    ori.sx,
    ori.sy,
    ori.sWidth,
    ori.sHeight,
    0,
    0,
    ori.sWidth,
    ori.sHeight,
  )
  ctx.drawImage(
    sourceImage,
    kaii.sx,
    kaii.sy,
    kaii.sWidth,
    kaii.sHeight,
    0,
    ori.sHeight,
    kaii.sWidth,
    kaii.sHeight,
  )
  const blob = await canvas.convertToBlob()
  return URL.createObjectURL(blob)
}

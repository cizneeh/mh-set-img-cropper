import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

import {
  ImageCategory,
  cropImage,
  identifyImage,
  renderToImage,
} from '../logic'
import { isWide } from '../logic/utils/isWide'

export const imageURLsAtom = atom<string[]>([])
export const useImageURLs = () => useAtom(imageURLsAtom)

/** delete an image  */
export const useDeleteImageURL = () =>
  useSetAtom(
    atom(null, (get, set, url: string) =>
      set(
        imageURLsAtom,
        get(imageURLsAtom).filter((u) => u !== url),
      ),
    ),
  )

export const imageElementsAtom = atom((get) =>
  Promise.all(get(imageURLsAtom).map((url) => renderToImage(url))),
)

export type CroppedImage =
  | {
      isError: false
      original: string
      category: ImageCategory
      cropped: string
    }
  | {
      isError: true
      original: string
      error: 'failedToRender' | 'notWide' | 'failedToCrop' | 'failedToIdentify'
    }

export const croppedImageElementsAtom = atom<Promise<CroppedImage[]>>(
  async (get) => {
    const images = get(imageURLsAtom)
    return await Promise.all(
      images.map(async (img) => {
        const imgElem = await renderToImage(img)
        if (!imgElem)
          return {
            isError: true,
            original: img,
            error: 'failedToRender',
          }

        if (!isWide(imgElem.width, imgElem.height))
          return {
            isError: true,
            original: img,
            error: 'notWide',
          }

        const canvas = new OffscreenCanvas(imgElem.width, imgElem.height)
        const ctx = canvas.getContext('2d')
        if (!ctx)
          return {
            isError: true,
            original: img,
            error: 'failedToCrop',
          }
        ctx.drawImage(imgElem, 0, 0)
        const imageData = ctx.getImageData(0, 0, imgElem.width, imgElem.height)
        const category = identifyImage(imageData, 'Rise')
        const cropped = await cropImage(canvas, category)
        return {
          isError: false,
          original: img,
          category,
          cropped,
        }
      }),
    )
  },
)
export const useCroppedImages = () => useAtom(croppedImageElementsAtom)
export const useReadCroppedImage = () => useAtomValue(croppedImageElementsAtom)

export const resultImageURLAtom = atom(async (get) => {
  const _croppedImages = await get(croppedImageElementsAtom)
  const canvas = new OffscreenCanvas(1920, 1080)
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas Error')
  const croppedImages = _croppedImages.filter((img) => !img.isError)
  const skillImages = croppedImages.filter((img) => img.category === 'skills')
  const images = await Promise.all(
    croppedImages.map(async (img) => {
      const imgElem = await renderToImage(img.cropped)
      if (!imgElem) throw new Error('Failed to render')
      if (img.category === 'armor_head') ctx.drawImage(imgElem, 0, 0)
      if (img.category === 'armor_chest') ctx.drawImage(imgElem, 358, 0)
      if (img.category === 'armor_arms') ctx.drawImage(imgElem, 0, 380)
      if (img.category === 'armor_waist') ctx.drawImage(imgElem, 358, 380)
      if (img.category === 'armor_legs') ctx.drawImage(imgElem, 0, 650)
      if (img.category === 'charm') ctx.drawImage(imgElem, 720, 0)
    }),
  )
  const skillImageElems = await Promise.all(
    skillImages.map(async (img) => {
      const imgElem = await renderToImage(img.cropped)
      if (!imgElem) throw new Error('Failed to render')
      return imgElem
    }),
  )
  skillImageElems.forEach((img, i) => {
    const width = 1200
    const w = 360
    ctx.drawImage(img, width + w * i, 0)
  })
  const blob = await canvas.convertToBlob()
  return URL.createObjectURL(blob)
})
// TODO: readとwrite、readwriteで名前を統一する
export const useResultImageURL = () => useAtomValue(resultImageURLAtom)

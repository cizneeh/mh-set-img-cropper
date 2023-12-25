import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'

import { cropImage, identifyImage, renderToImage } from '../logic'
import { isWide } from '../logic/isWide'

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

export const croppedImageURLsAtom = atom<string[]>([])

export const imageElementsAtom = atom((get) =>
  Promise.all(get(imageURLsAtom).map((url) => renderToImage(url))),
)

export type CroppedImage =
  | {
      isError: false
      original: string
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
        const category = identifyImage(imageData)
        const cropped = await cropImage(canvas, category)
        return {
          isError: false,
          original: img,
          cropped,
        }
      }),
    )
  },
)
export const useCroppedImages = () => useAtom(croppedImageElementsAtom)
export const useReadCroppedImage = () => useAtomValue(croppedImageElementsAtom)

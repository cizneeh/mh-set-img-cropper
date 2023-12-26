import { SimpleGrid } from '@chakra-ui/react'
import { Suspense } from 'react'

import { useReadCroppedImage } from '../states/imageAtom'

import { ImageCard } from './ImageCard'
import { MSpinner } from './MSpinner'

export const ImagesGrid = () => (
  <Suspense fallback={<MSpinner />}>
    <_ImageGrid />
  </Suspense>
)

export const _ImageGrid = () => {
  const croppedImages = useReadCroppedImage()
  return (
    <SimpleGrid columns={[1, 2, 3, 4]} spacing={6}>
      {croppedImages.map((img) => (
        <ImageCard key={img.original} img={img} />
      ))}
    </SimpleGrid>
  )
}

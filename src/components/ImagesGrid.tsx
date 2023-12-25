import { SimpleGrid, Spinner } from '@chakra-ui/react'
import { Suspense } from 'react'

import { useReadCroppedImage } from '../states/imageAtom'

import { ImageCard } from './ImageCard'

export const ImagesGrid = () => (
  <Suspense fallback={<Spinner />}>
    <_ImageGrid />
  </Suspense>
)

export const _ImageGrid = () => {
  const croppedImages = useReadCroppedImage()
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing={6}>
      {croppedImages.map((img) => (
        <ImageCard key={img.original} img={img} />
      ))}
    </SimpleGrid>
  )
}

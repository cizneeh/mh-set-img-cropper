import {
  Alert,
  AlertDescription,
  AlertIndicator,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  VStack,
} from '@chakra-ui/react'
import { memo } from 'react'

import { type CroppedImage, useDeleteImageURL } from '../states/imageAtom'

import { DeleteIcon } from './icons'

export const ImageCard = memo(
  ({ img }: { img: CroppedImage }) => {
    const deleteImage = useDeleteImageURL()

    return (
      <Card.Root>
        <CardHeader>
          <HStack justifyContent={'space-between'}>
            <Heading as="h2" size={'md'}>
              {img.isError ? 'unknown' : img.category}
            </Heading>
            <DeleteIcon
              size="1.5rem"
              onClick={() => deleteImage(img.original)}
              cursor={'pointer'}
            />
          </HStack>
        </CardHeader>
        <CardBody>
          <VStack gap={4}>
            <img width={440} src={img.original} alt="original" />
            {img.isError ? (
              <Alert.Root status="error" borderRadius={6}>
                <AlertIndicator />
                <AlertDescription>
                  {img.error === 'failedToRender'
                    ? '画像の読み込みに失敗しました'
                    : img.error === 'notWide'
                      ? '16:9以外のアスペクト比には対応していません。ごめん！'
                      : img.error === 'failedToIdentify'
                        ? '画像の識別に失敗しました。使用する画像の注意点： TODOリンク'
                        : 'unknown'}
                </AlertDescription>
              </Alert.Root>
            ) : (
              <img width={220} src={img.cropped} alt="cropped" />
            )}

            <a href={img.isError ? '' : img.cropped} download>
              <Button>Download</Button>
            </a>
          </VStack>
        </CardBody>
      </Card.Root>
    )
  },
  (prev, next) => prev.img.original === next.img.original,
)
ImageCard.displayName = 'ImageCard'

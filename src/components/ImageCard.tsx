import {
  Alert,
  AlertDescription,
  AlertIndicator,
  Card,
  CardBody,
  CardHeader,
  Heading,
} from '@chakra-ui/react'
import { memo } from 'react'

import { type CroppedImage, useDeleteImageURL } from '../states/imageAtom'

import { DeleteIcon } from './icons'

export const ImageCard = memo(
  ({ img }: { img: CroppedImage }) => {
    console.log('render image')
    const deleteImage = useDeleteImageURL()

    return (
      <Card.Root>
        <CardHeader
          display={'flex'}
          alignItems={'center'}
          justifyContent={'space-between'}
        >
          <Heading as="h2" size={'md'}>
            スキル
          </Heading>
          <DeleteIcon
            size="1.5rem"
            onClick={() => deleteImage(img.original)}
            cursor={'pointer'}
          />
        </CardHeader>
        <CardBody
          display="flex"
          flexDirection="column"
          gap={4}
          alignItems={'center'}
        >
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
                      ? '画像の識別に失敗しました。使用する画像の注意点： TODO: リンクを貼る'
                      : '不明なエラーです'}
              </AlertDescription>
            </Alert.Root>
          ) : (
            <img width={220} src={img.cropped} alt="cropped" />
          )}
        </CardBody>
      </Card.Root>
    )
  },
  (prev, next) => prev.img.original === next.img.original,
)
ImageCard.displayName = 'ImageCard'

import { Card, type CardRootProps, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useImageURLs } from '../states/imageAtom'

type Props = Omit<CardRootProps, 'children'>

export const ImageSelect = (props: Props) => {
  const [imageURLs, setImageURLs] = useImageURLs()

  const onDrop = useCallback(
    (files: File[]) => {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file))
      setImageURLs([...imageURLs, ...urls])
    },
    [imageURLs, setImageURLs],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    multiple: true,
    onDrop,
  })

  const inputProps = getInputProps()

  // TODO: 色とテーマとisDragActiveとポインターとちゃんとやる
  return (
    <Card.Root
      {...props}
      {...getRootProps()}
      textAlign={'center'}
      bg={isDragActive ? 'gray.500' : undefined}
      cursor={'pointer'}
    >
      <Text>画像をドラッグ & ドロップ</Text>
      <Text>または</Text>
      <Text>クリックしてファイルを選択</Text>
      <input type="file" hidden {...inputProps} size={undefined} />
    </Card.Root>
  )
}

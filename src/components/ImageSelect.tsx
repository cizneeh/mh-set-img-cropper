import { Card, CardProps, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useImageURLs } from '../states/imageAtom'

type Props = Omit<CardProps, 'children'>

export const ImageSelect = (props: Props) => {
  const [imageURLs, setImageURLs] = useImageURLs()

  const onDrop = useCallback(
    (files: File[]) => {
      const urls = Array.from(files).map((file) => URL.createObjectURL(file))
      setImageURLs([...imageURLs, ...urls])
    },
    [imageURLs],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': [],
    },
    multiple: true,
    onDrop,
  })

  // TODO: 色とテーマとisDragActiveとポインターとちゃんとやる
  return (
    <Card
      {...props}
      {...getRootProps()}
      textAlign={'center'}
      bg={isDragActive ? 'gray.500' : undefined}
      cursor={'pointer'}
    >
      <Text>画像をドラッグ & ドロップ</Text>
      <Text>または</Text>
      <Text>クリックしてファイルを選択</Text>
      <input type="file" hidden {...(getInputProps(), { size: undefined })} />
    </Card>
  )
}

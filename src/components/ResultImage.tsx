import {
  Card,
  CardHeader,
  CardBody,
  VStack,
  Alert,
  AlertIcon,
  AlertDescription,
  Button,
} from '@chakra-ui/react'
import { Suspense } from 'react'

import { useResultImageURL } from '../states/imageAtom'

import { MSpinner } from './MSpinner'

export const ResultImage = () => (
  <Suspense fallback={<MSpinner />}>
    <_ResultImage />
  </Suspense>
)

export const _ResultImage = () => {
  const resultImage = useResultImageURL()

  return (
    <>
      <Card>
        <CardHeader>result</CardHeader>
        <CardBody>
          <img width={1920} src={resultImage} />
        </CardBody>
        <a href={resultImage} download>
          <Button>Download</Button>
        </a>
      </Card>
    </>
  )
}

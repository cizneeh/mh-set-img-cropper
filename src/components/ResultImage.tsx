import { Button, Card } from '@chakra-ui/react'
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
      <Card.Root>
        <Card.Header>result</Card.Header>
        <Card.Body>
          <img width={1920} src={resultImage} alt="result" />
        </Card.Body>
        <a href={resultImage} download>
          <Button>Download</Button>
        </a>
      </Card.Root>
    </>
  )
}

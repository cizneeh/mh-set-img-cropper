import { Box, ChakraProvider, chakra } from '@chakra-ui/react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ImageSelect } from './components/ImageSelect'
import { ImagesGrid } from './components/ImagesGrid'
import { ResultImage } from './components/ResultImage'

export const App = () => {
  return (
    <ChakraProvider>
      <Header />
      <chakra.main
        my={0}
        mx={'auto'}
        width="min(95%, 80rem)"
        display={'flex'}
        flexDirection={'column'}
        gap={10}
      >
        <ImageSelect mt={4} />
        <ResultImage />
        <Box minHeight={'70vh'}>
          <ImagesGrid />
        </Box>
        <Footer />
      </chakra.main>
    </ChakraProvider>
  )
}

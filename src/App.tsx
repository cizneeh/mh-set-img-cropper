import { Box, ChakraProvider, chakra, defaultSystem } from '@chakra-ui/react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ImageSelect } from './components/ImageSelect'
import { ImagesGrid } from './components/ImagesGrid'

export const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <chakra.main
        my={0}
        mx={'auto'}
        width="min(90%, 80rem)"
        display={'flex'}
        flexDirection={'column'}
        gap={10}
      >
        <ImageSelect mt={4} />
        <Box minHeight={'70vh'}>
          <ImagesGrid />
        </Box>
        <Footer />
      </chakra.main>
    </ChakraProvider>
  )
}

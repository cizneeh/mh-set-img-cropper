import { ChakraProvider, chakra } from '@chakra-ui/react'

import { FileComp } from './components/File'

export const App = () => {
  return (
    <ChakraProvider>
      <chakra.main my={0} mx={'auto'} width="min(90%, 80rem)">
        <FileComp />
      </chakra.main>
    </ChakraProvider>
  )
}

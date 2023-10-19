import {
  Card,
  CardBody,
  CardHeader,
  ChakraProvider,
  chakra,
  Text,
} from '@chakra-ui/react'

export const App = () => {
  return (
    <ChakraProvider>
      <chakra.main my={0} mx={'auto'} width="min(90%, 40rem)">
        <Card>
          <CardHeader>何か</CardHeader>
          <CardBody>
            <Text>何か</Text>
          </CardBody>
        </Card>
      </chakra.main>
    </ChakraProvider>
  )
}

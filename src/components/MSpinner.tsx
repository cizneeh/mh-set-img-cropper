import { Center, CenterProps, Spinner } from '@chakra-ui/react'

type Props = Omit<CenterProps, 'children'>

export const MSpinner = (props: Props) => (
  <Center {...props}>
    <Spinner size={'lg'} />
  </Center>
)

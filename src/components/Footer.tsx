import { chakra, Text, HStack } from '@chakra-ui/react'

import { XIcon, GithubIcon } from './icons'

export const Footer = () => {
  return (
    <chakra.footer>
      <HStack justifyContent={'center'} gap={6}>
        <address>
          <XIcon size={'2rem'} />
        </address>
        <address>
          <GithubIcon size={'2rem'} />
        </address>
      </HStack>
      <Text align={'center'} mt={4}>
        <small>&copy; 2023 ZenCieh</small>
      </Text>
    </chakra.footer>
  )
}

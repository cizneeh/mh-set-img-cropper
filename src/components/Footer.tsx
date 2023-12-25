import { chakra, Text, Flex } from '@chakra-ui/react'

import { XIcon, GithubIcon } from './icons'

export const Footer = () => {
  return (
    <chakra.footer>
      <Flex justifyContent={'center'} gap={6}>
        <address>
          <XIcon size={'2rem'} />
        </address>
        <address>
          <GithubIcon size={'2rem'} />
        </address>
      </Flex>
      <Text align={'center'} mt={4}>
        <small>&copy; 2023 ZenCieh</small>
      </Text>
    </chakra.footer>
  )
}

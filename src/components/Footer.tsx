import { Flex, Text, chakra } from '@chakra-ui/react'

import { GithubIcon, XIcon } from './icons'

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
      <Text textAlign={'center'} mt={4}>
        <small>&copy; 2023 ZenCieh</small>
      </Text>
    </chakra.footer>
  )
}

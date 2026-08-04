import { Flex, Heading, Separator, chakra } from '@chakra-ui/react'
import { GithubIcon } from './icons/GithubIcon'
import { XIcon } from './icons/XTwitterIcon'

export const Header = () => (
  <chakra.header px={4}>
    <Flex as="nav" py="4" justifyContent="space-between" px={4}>
      <Heading as="h1" size="2xl">
        MH Set Image Cropper
      </Heading>
      <Flex alignItems="center" justifyContent="space-between" gap="4">
        <XIcon size="2rem" />
        <GithubIcon size="2rem" />
      </Flex>
    </Flex>
    <Separator />
  </chakra.header>
)

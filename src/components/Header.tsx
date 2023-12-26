import { chakra, Divider, Heading, HStack } from '@chakra-ui/react'

import { ColorSwitchButton } from './icons/ColorSwitchButton'
import { GithubIcon } from './icons/GithubIcon'
import { XIcon } from './icons/XTwitterIcon'

export const Header = () => (
  <chakra.header px={4}>
    <HStack as="nav" py="4" justifyContent="space-between" px={4}>
      <Heading as="h1" size="2xl">
        MH Set Image Cropper
      </Heading>
      <HStack justifyContent="space-between" gap={4}>
        <ColorSwitchButton size={'sm'} />
        <XIcon size="2rem" />
        <GithubIcon size="2rem" />
      </HStack>
    </HStack>
    <Divider />
  </chakra.header>
)

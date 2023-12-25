import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'

type Props = Omit<IconButtonProps, 'icon' | 'onClick' | 'aria-label'>
export const ColorSwitchButton: React.FC<Props> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Tooltip
      label={
        colorMode === 'light'
          ? 'ダークモードへ切り替えます'
          : 'ライトモードへ切り替えます'
      }
    >
      <IconButton
        {...props}
        aria-label="Switch color mode"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  )
}

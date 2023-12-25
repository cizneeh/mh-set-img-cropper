import { FaSquareXTwitter } from 'react-icons/fa6'

type Props = React.ComponentProps<typeof FaSquareXTwitter>

export const XIcon = (props: Props) => (
  <a href="https://twitter.com/ZenCieh" target="_blank" rel="noreferrer">
    <FaSquareXTwitter {...props} />
  </a>
)

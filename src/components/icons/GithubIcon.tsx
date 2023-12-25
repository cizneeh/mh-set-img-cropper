import { FaGithub } from 'react-icons/fa6'

type Props = React.ComponentProps<typeof FaGithub>

export const GithubIcon = (props: Props) => (
  <a
    href="https://github.com/cizneeh/mh-set-img-cropper"
    target="_blank"
    rel="noreferrer"
  >
    <FaGithub {...props} />
  </a>
)

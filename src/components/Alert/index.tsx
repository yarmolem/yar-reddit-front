import {
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert as ChakraAlert,
  AlertProps
} from '@chakra-ui/alert'
import { CloseButton } from '@chakra-ui/close-button'

import { Errors } from '../../interfaces'

interface Props extends AlertProps {
  errors: Errors
  onClose: () => void
}

const Alert = ({ onClose, errors, status = 'error', ...props }: Props) => {
  if (errors.ok) return <div />

  return (
    <ChakraAlert status={status} {...props}>
      <AlertIcon />
      <AlertTitle mr={2}>{errors.msg?.title}</AlertTitle>
      <AlertDescription>{errors.msg?.desc}</AlertDescription>
      <CloseButton
        top="8px"
        right="8px"
        position="absolute"
        onClick={onClose}
      />
    </ChakraAlert>
  )
}

export default Alert

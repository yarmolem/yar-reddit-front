import { InputHTMLAttributes, useState } from 'react'

import Icon from '@chakra-ui/icon'
import { Box } from '@chakra-ui/layout'
// import { ViewIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/button'
import { Input as InputField } from '@chakra-ui/input'
import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control'
import { useField } from 'formik'
import { IconEye, IconEyeSlash } from '../../icons'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, name, size: _, ...props }: Props) => {
  const [field, meta] = useField(name!)
  const [showPass, setShowPass] = useState(false)

  const renderTogglePass = () => (
    <IconButton
      right={0}
      bottom={0}
      pos="absolute"
      variant="solid"
      bg="transparent"
      aria-label="toggle password"
      onClick={() => setShowPass((s) => !s)}
      icon={<Icon as={!showPass ? IconEye : IconEyeSlash} />}
    />
  )

  const handleLabel = () => {
    const active = { left: 0, bottom: 6 }
    const inactive = { left: 4, bottom: 0 }
    const isEmpty = !field.value && String(field.value).trim() === ''

    return isEmpty ? inactive : active
  }

  const hasError = meta.error && meta.touched

  return (
    <Box h={50} mb={hasError ? 10 : 5}>
      <FormControl id={name} isInvalid={!!hasError}>
        <Box
          pos="relative"
          transition="all 0.3s ease"
          sx={{
            'input:focus + label': { left: 0, bottom: 6 },
            'input:placeholder-shown + label': { left: 0, bottom: 6 }
          }}
        >
          <InputField
            {...field}
            {...props}
            name={name}
            paddingLeft={4}
            variant="flushed"
            fontWeight="light"
            autoComplete="off"
            type={showPass ? 'text' : props.type}
            _focus={{ borderColor: 'primary.500' }}
          />
          <FormLabel
            pos="absolute"
            color="gray.500"
            transition="all 0.3s ease"
            {...handleLabel()}
          >
            {label}
          </FormLabel>
          {props.type === 'password' ? renderTogglePass() : null}
        </Box>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default Input

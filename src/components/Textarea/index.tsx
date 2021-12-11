import type { TextareaHTMLAttributes } from 'react'

import {
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/form-control'
import { useField } from 'formik'
import { Box } from '@chakra-ui/layout'
import { Textarea as TextareaField } from '@chakra-ui/textarea'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
}

const Textarea = ({ label, name, ...props }: Props) => {
  const [field, meta] = useField(name!)

  const handleLabel = () => {
    const active = { left: 0, top: -5 }
    const inactive = { left: 4, top: 0 }
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
            'textarea:focus + label': { left: 0, top: -5 },
            'textarea:placeholder-shown + label': { left: 0, top: -5 }
          }}
        >
          <TextareaField
            {...field}
            {...props}
            name={name}
            paddingLeft={4}
            variant="flushed"
            fontWeight="light"
            autoComplete="off"
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
        </Box>
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}

export default Textarea

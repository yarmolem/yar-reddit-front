import React from 'react'
import {
  Box,
  Flex,
  Link,
  chakra,
  HTMLChakraProps,
  useColorModeValue
} from '@chakra-ui/react'

interface Props extends HTMLChakraProps<'div'> {}

const CardText = (props: Props) => {
  return (
    <Box
      {...props}
      px={4}
      py={3}
      w="full"
      h="full"
      // maxW="sm"
      shadow="md"
      rounded="md"
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue('gray.800', 'gray.400')}
        >
          Courses and MOOCs
        </chakra.span>
        <chakra.span
          bg={useColorModeValue('brand.200', 'brand.300')}
          color={useColorModeValue('brand.800', 'brand.900')}
          px={3}
          py={1}
          rounded="full"
          textTransform="uppercase"
          fontSize="xs"
        >
          psychology
        </chakra.span>
      </Flex>

      <Box>
        <chakra.h1
          fontSize="lg"
          fontWeight="bold"
          mt={2}
          color={useColorModeValue('gray.800', 'white')}
        >
          AP Psychology - Course 5: Health and Behavior
        </chakra.h1>
        <chakra.p
          fontSize="sm"
          mt={2}
          color={useColorModeValue('gray.600', 'gray.300')}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
          eligendi similique exercitationem optio libero vitae accusamus
          cupiditate laborum eos.
        </chakra.p>
      </Box>

      <Box>
        <Flex
          alignItems="center"
          mt={2}
          color={useColorModeValue('gray.700', 'gray.200')}
        >
          <span>Visit on:</span>
          <Link
            mx={2}
            cursor="pointer"
            textDecor="underline"
            color={useColorModeValue('brand.600', 'brand.400')}
          >
            edx.com
          </Link>
          <span>or</span>
          <Link
            mx={2}
            cursor="pointer"
            textDecor="underline"
            color={useColorModeValue('brand.600', 'brand.400')}
            wordBreak="break-word"
          >
            classcentral.com
          </Link>
        </Flex>
      </Box>
    </Box>
  )
}

export default CardText

import React from 'react'
import { chakra, Box, Image, HTMLChakraProps } from '@chakra-ui/react'

interface Props extends HTMLChakraProps<'div'> {}

const CardSmall = (props: Props) => {
  return (
    <Box
      {...props}
      maxW="xs"
      mx="auto"
      shadow="lg"
      rounded="lg"
      h="max-content"
      overflow="hidden"
      _light={{ bg: 'white' }}
      _dark={{ bg: 'gray.800' }}
    >
      <Box px={4} py={2}>
        <chakra.h1
          fontSize="3xl"
          fontWeight="bold"
          textTransform="uppercase"
          _light={{ bg: 'white' }}
          _dark={{ bg: 'gray.800' }}
        >
          NIKE AIR
        </chakra.h1>
        <chakra.p
          mt={1}
          fontSize="sm"
          _light={{ bg: 'white' }}
          _dark={{ bg: 'gray.800' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </chakra.p>
      </Box>

      <Image
        h={48}
        w="full"
        fit="cover"
        mt={2}
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
        alt="NIKE AIR"
      />
    </Box>
  )
}

export default CardSmall

import React from 'react'
import {
  Box,
  Flex,
  Link,
  Image,
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
      shadow="md"
      rounded="md"
      bg={useColorModeValue('white', 'gray.800')}
    >
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

        <Box mt={4}>
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                alt="Avatar"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
              />
              <Link
                mx={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                Jone Doe
              </Link>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              21 SEP 2015
            </chakra.span>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default CardText

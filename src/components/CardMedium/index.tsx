import React from 'react'
import {
  Box,
  Flex,
  Link,
  Image,
  Button,
  chakra,
  HTMLChakraProps,
  useColorModeValue
} from '@chakra-ui/react'

interface Props extends HTMLChakraProps<'div'> {}

const CardMedium = (props: Props) => {
  return (
    <Box
      {...props}
      overflow="hidden"
      maxW={{ lg: '5xl' }}
      shadow={{ lg: 'lg' }}
      rounded={{ lg: 'lg' }}
      display={{ lg: 'flex' }}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Box w={{ lg: '50%' }}>
        <Box
          h={{ base: 64, lg: 'full' }}
          bgSize="cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"
          }}
        ></Box>
      </Box>

      <Box py={6} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: '50%' }}>
        <chakra.h2
          fontSize={{ base: '2xl', md: '3xl' }}
          color={useColorModeValue('gray.800', 'white')}
          fontWeight="bold"
        >
          Build Your New{' '}
          <chakra.span color={useColorModeValue('brand.600', 'brand.400')}>
            Idea
          </chakra.span>
        </chakra.h2>
        <chakra.p mt={4} color={useColorModeValue('gray.600', 'gray.400')}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi
          reprehenderit vitae exercitationem aliquid dolores ullam temporibus
          enim expedita aperiam mollitia iure consectetur dicta tenetur, porro
          consequuntur saepe accusantium consequatur.
        </chakra.p>

        <Flex
          mt={8}
          w="full"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Button colorScheme="primary" fontWeight="semibold">
              Read more
            </Button>
          </Box>

          <Flex alignItems="center">
            <Flex alignItems="center">
              <Image
                h={10}
                fit="cover"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                alt="Avatar"
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
        </Flex>
      </Box>
    </Box>
  )
}

export default CardMedium

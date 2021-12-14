import React from 'react'
import NextImage from 'next/image'
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
import { formatDate } from '../../utils/formatDate'
import { GetPostQuery } from '../../generated/graphql'

interface Props extends HTMLChakraProps<'div'> {
  post: GetPostQuery['getPosts']['posts'][0]
}

const CardMedium = ({ post, ...props }: Props) => {
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
        <Box pos="relative" h={{ base: 64, lg: 'full' }}>
          <NextImage src={post.image} alt={post.title} layout="fill" />
        </Box>
      </Box>

      <Box py={6} px={6} maxW={{ base: 'xl', lg: '5xl' }} w={{ lg: '50%' }}>
        <Link>
          <chakra.h2
            fontSize={{ base: '2xl', md: '3xl' }}
            color={useColorModeValue('gray.800', 'white')}
            fontWeight="bold"
          >
            {post.title}
          </chakra.h2>
        </Link>
        <chakra.p
          mt={4}
          overflow="hidden"
          color={useColorModeValue('gray.600', 'gray.400')}
        >
          {post.textSnippet}
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
                alt="Avatar"
                rounded="full"
                src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
              />
              <Link
                mx={2}
                fontWeight="bold"
                color={useColorModeValue('gray.700', 'gray.200')}
              >
                {post.creator.username}
              </Link>
            </Flex>
            <chakra.span
              mx={1}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              {formatDate(post.createdAt)}
            </chakra.span>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default CardMedium

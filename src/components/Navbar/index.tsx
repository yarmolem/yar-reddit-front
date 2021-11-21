import NextLink from 'next/link'
import Icon from '@chakra-ui/icon'
import { chakra } from '@chakra-ui/system'
import { Button, IconButton } from '@chakra-ui/button'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/layout'

import { IconMoon, IconSun } from '../../icons'
import { isServer } from '../../utils/isServer'
import useAuthService from '../../services/useAuthService'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  const cl = useColorModeValue('gray.800', 'white')
  const SwitchIcon = useColorModeValue(IconMoon, IconSun)

  const { loading, user, logoutMutation } = useAuthService({
    pauseQuery: isServer()
  })

  return (
    <>
      <chakra.header
        py={4}
        h="full"
        w="full"
        px={{ base: 2, sm: 4 }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'gray.800' }}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <NextLink href="/">
            <Link display="flex" alignItems="center">
              <Heading>yar-reddit</Heading>
            </Link>
          </NextLink>
          <Box display={{ base: 'none', md: 'inline-flex' }}>
            <HStack spacing={1}>
              <NextLink href="/">
                <Button
                  as="a"
                  color="gray.500"
                  display="inline-flex"
                  alignItems="center"
                  fontSize="md"
                  _hover={{ color: cl }}
                  _light={{ bg: 'white' }}
                  _dark={{ bg: 'gray.800' }}
                  _focus={{ boxShadow: 'none' }}
                >
                  Blog
                </Button>
              </NextLink>
              <Button
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _light={{ bg: 'white' }}
                _dark={{ bg: 'gray.800' }}
                _focus={{ boxShadow: 'none' }}
              >
                Pricing
              </Button>
            </HStack>
          </Box>
          <Box display="flex" alignItems="center">
            {!loading && !user ? (
              <HStack spacing={1}>
                <NextLink href="/login">
                  <Button as="a" colorScheme="primary" variant="ghost">
                    Sign in
                  </Button>
                </NextLink>
                <NextLink href="/register">
                  <Button as="a" colorScheme="primary" variant="solid">
                    Sign up
                  </Button>
                </NextLink>
              </HStack>
            ) : (
              <Flex>
                <Text mr={4}>{user?.username}</Text>
                <Button
                  onClick={logoutMutation}
                  colorScheme="red"
                  variant="link"
                >
                  Logout
                </Button>
              </Flex>
            )}
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              onClick={toggleColorMode}
              ml={{ base: '0', md: '3' }}
              aria-label="Toggle color mode"
              icon={<Icon as={SwitchIcon} />}
            />
          </Box>
        </Flex>
      </chakra.header>
    </>
  )
}

export default Navbar

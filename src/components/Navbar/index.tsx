import { chakra } from '@chakra-ui/system'
import { useDisclosure } from '@chakra-ui/hooks'
import { Button, IconButton } from '@chakra-ui/button'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Heading, HStack, Link } from '@chakra-ui/layout'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const cl = useColorModeValue('gray.800', 'white')
  const { isOpen, onClose, onOpen } = useDisclosure()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <>
      <chakra.header h="full" bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Link display="flex" alignItems="center" href="/">
            <Heading>LOGO</Heading>
          </Link>
          <Box display={{ base: 'none', md: 'inline-flex' }}>
            <HStack spacing={1}>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: 'none' }}
              >
                Blog
              </Button>
              <Button
                bg={bg}
                color="gray.500"
                display="inline-flex"
                alignItems="center"
                fontSize="md"
                _hover={{ color: cl }}
                _focus={{ boxShadow: 'none' }}
              >
                Pricing
              </Button>
            </HStack>
          </Box>
          <Box display="flex" alignItems="center">
            <HStack spacing={1}>
              <Button colorScheme="brand" variant="ghost" size="sm">
                Sign in
              </Button>
              <Button colorScheme="brand" variant="solid" size="sm">
                Sign up
              </Button>
            </HStack>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              icon={<SwitchIcon />}
              onClick={toggleColorMode}
              ml={{ base: '0', md: '3' }}
              aria-label="Toggle color mode"
            />
            <IconButton
              display={{ base: 'flex', md: 'none' }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue('gray.800', 'inherit')}
              variant="ghost"
              // icon={<AiOutlineMenu />}
              onClick={onOpen}
            />
          </Box>
        </Flex>
      </chakra.header>
    </>
  )
}

export default Navbar

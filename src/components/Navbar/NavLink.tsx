import NextLink from 'next/link'
import { Button, useColorModeValue } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  to?: string
  isActive?: boolean
  children?: ReactNode
}

const NavLink = ({ to = '/', isActive, children }: Props) => {
  const cl = useColorModeValue('gray.800', 'white')
  return (
    <NextLink href={to}>
      <Button
        as="a"
        fontSize="md"
        cursor="pointer"
        alignItems="center"
        display="inline-flex"
        _hover={{ color: cl }}
        _light={{ bg: 'white' }}
        _dark={{ bg: 'gray.800' }}
        _focus={{ boxShadow: 'none' }}
        color={isActive ? 'white' : 'gray.500'}
      >
        {children}
      </Button>
    </NextLink>
  )
}

export default NavLink

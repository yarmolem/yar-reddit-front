import { ReactNode } from 'react'
import { Container, ContainerProps } from '@chakra-ui/layout'

import Navbar from '../Navbar'

interface Props extends ContainerProps {
  children: ReactNode
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Navbar />
      <Container {...props}>{children}</Container>
    </>
  )
}

export default Layout

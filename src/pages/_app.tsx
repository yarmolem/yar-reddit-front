import { Box, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Box
        minH="100vh"
        _dark={{ bg: 'primary.800' }}
        _light={{ bg: 'primary.50' }}
      >
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp

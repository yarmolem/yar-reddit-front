import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const colors = {
  primary: {
    50: '#def4ff',
    100: '#b0dbff',
    200: '#80c3ff',
    300: '#50abfe',
    400: '#2693fc',
    500: '#147ae4',
    600: '#085fb2',
    700: '#004480',
    800: '#00294f',
    900: '#000f1f'
  }
}

const theme = extendTheme({ config, colors })

export default theme

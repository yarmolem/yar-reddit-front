import Head from 'next/head'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/button'
import { withUrqlClient } from 'next-urql'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Center, Divider, Heading, Container } from '@chakra-ui/layout'

import client from '../graphql/client'
import Input from '../components/Input'
import { registerSchema } from '../validation/registerSchema'
import useAuthService from '../services/useAuthService'

interface Values {
  username: string
  password: string
  password2: string
}

const Register = () => {
  const { loading, registerMutation } = useAuthService()

  return (
    <Container>
      <Head>
        <title>Register</title>
      </Head>

      <Center h="calc(100vh - 75px)">
        <Box w="full">
          <Heading textAlign="center" mb={4}>
            Register
          </Heading>

          <Formik
            validate={registerSchema}
            onSubmit={registerMutation}
            initialValues={{ username: '', password: '', password2: '' }}
          >
            {(props: FormikProps<Values>) => (
              <Form>
                <Input name="username" label="Username" />
                <Input name="password" label="Password" type="password" />
                <Input type="password" name="password2" label="Confirm Pass" />

                <Button
                  mt={4}
                  w="full"
                  type="submit"
                  colorScheme="primary"
                  isLoading={loading}
                >
                  Sign up
                </Button>

                <Divider my={4} />

                <NextLink href="/login">
                  <Button
                    w="full"
                    type="button"
                    variant="outline"
                    colorScheme="primary"
                  >
                    Sign in
                  </Button>
                </NextLink>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Container>
  )
}

export default withUrqlClient(client)(Register)

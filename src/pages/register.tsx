import Head from 'next/head'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/button'
import { withUrqlClient } from 'next-urql'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Center, Divider, Heading, Container } from '@chakra-ui/layout'

import client from '../graphql/client'
import Input from '../components/Input'
import useAuthService from '../services/useAuthService'
import { registerSchema } from '../validation/registerSchema'

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

      <Center h="100vh">
        <Box w="full">
          <Heading textAlign="center" mb={4}>
            Register
          </Heading>

          <Formik
            validate={registerSchema}
            onSubmit={registerMutation}
            initialValues={{
              email: '',
              username: '',
              password: '',
              password2: ''
            }}
          >
            {(props: FormikProps<Values>) => (
              <Form>
                <Input name="email" label="Email" />
                <Input name="username" label="Username" />
                <Input name="password" label="Password" type="password" />
                <Input type="password" name="password2" label="Confirm Pass" />

                <Button
                  mt={4}
                  w="full"
                  type="submit"
                  isLoading={loading}
                  colorScheme="primary"
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

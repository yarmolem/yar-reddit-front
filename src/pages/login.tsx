import Head from 'next/head'
import NextLink from 'next/link'
import { Button } from '@chakra-ui/button'
import { withUrqlClient } from 'next-urql'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Flex, Link, Center, Divider, Heading } from '@chakra-ui/layout'

import client from '../graphql/client'
import Input from '../components/Input'
import Layout from '../components/Layout'
import { loginSchema } from '../validation/loginSchema'
import useAuthService, { LoginValues } from '../services/useAuthService'

const Login = () => {
  const { loading, loginMutation } = useAuthService()

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <Center h="calc(100vh - 80px)">
        <Box w="full">
          <Heading textAlign="center" mb={4}>
            Login
          </Heading>

          <Formik
            validate={loginSchema}
            onSubmit={loginMutation}
            initialValues={{ usernameOrEmail: '', password: '' }}
          >
            {(props: FormikProps<LoginValues>) => (
              <Form>
                <Input name="usernameOrEmail" label="Username or email" />
                <Input name="password" label="Password" type="password" />
                <Flex justifyContent="flex-end">
                  <NextLink href="/forgot-password">
                    <Link>Forgot password ?</Link>
                  </NextLink>
                </Flex>

                <Button
                  mt={4}
                  w="full"
                  type="submit"
                  isLoading={loading}
                  colorScheme="primary"
                >
                  Sign in
                </Button>

                <Divider my={4} />

                <NextLink href="/register">
                  <Button
                    w="full"
                    type="button"
                    variant="outline"
                    colorScheme="primary"
                  >
                    Sign up
                  </Button>
                </NextLink>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Layout>
  )
}

export default withUrqlClient(client)(Login)

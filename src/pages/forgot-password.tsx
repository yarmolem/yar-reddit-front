import { useState } from 'react'
import Head from 'next/head'
import { withUrqlClient } from 'next-urql'
import { Button } from '@chakra-ui/button'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Center, Heading, Container, Text } from '@chakra-ui/layout'

import client from '../graphql/client'
import Input from '../components/Input'
import useAuthService from '../services/useAuthService'
import { forgotSchema } from '../validation/forgotSchema'

const ForgotPassword = () => {
  const [success, setSuccess] = useState(false)
  const { loading, forgotPassMutation } = useAuthService()

  return (
    <Container>
      <Head>
        <title>Forgot Password</title>
      </Head>

      <Center h="100vh">
        {!success ? (
          <Box w="full">
            <Heading textAlign="center" mb={1}>
              Forgot Password
            </Heading>
            <Text
              mb={10}
              textAlign="center"
              _dark={{ color: 'gray.500' }}
              _light={{ color: 'gray.700' }}
            >
              We will send you a email for reset your password
            </Text>

            <Formik
              validate={forgotSchema}
              onSubmit={async (v, a) => {
                await forgotPassMutation(v, a)
                setSuccess(true)
              }}
              initialValues={{ email: '' }}
            >
              {(props: FormikProps<{ email: string }>) => (
                <Form>
                  <Input name="email" label="Email" />

                  <Button
                    mt={4}
                    w="full"
                    type="submit"
                    isLoading={loading}
                    colorScheme="primary"
                  >
                    Send email
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        ) : (
          <Box>
            <Heading textAlign="center" mb={1}>
              Success!!
            </Heading>
            <Text
              mb={10}
              textAlign="center"
              _dark={{ color: 'gray.500' }}
              _light={{ color: 'gray.700' }}
            >
              If an account with that email exists, we will send you an email to
              change your password
            </Text>
          </Box>
        )}
      </Center>
    </Container>
  )
}

export default withUrqlClient(client)(ForgotPassword)

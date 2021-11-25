import Head from 'next/head'
import { NextPage } from 'next'
import NextLink from 'next/link'
import { withUrqlClient } from 'next-urql'
import { Button } from '@chakra-ui/button'
import { Form, Formik, FormikProps } from 'formik'
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Text
} from '@chakra-ui/layout'

import client from '../../graphql/client'
import Input from '../../components/Input'
import { passwordSchema } from '../../validation/passwordSchema'
import useAuthService, {
  ChangePasswordValues
} from '../../services/useAuthService'

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const { loading, errors, changePassMutation } = useAuthService()

  return (
    <Container>
      <Head>
        <title>Change password</title>
      </Head>

      <Center h="100vh">
        <Box w="full">
          <Heading textAlign="center" mb={1}>
            Change password
          </Heading>
          <Text
            mb={10}
            textAlign="center"
            _dark={{ color: 'gray.500' }}
            _light={{ color: 'gray.700' }}
          >
            Introduce a new password
          </Text>

          <Formik
            validate={passwordSchema}
            onSubmit={changePassMutation}
            initialValues={{ password: '', password2: '', token }}
          >
            {(props: FormikProps<ChangePasswordValues>) => (
              <Form>
                <Input name="password" label="Password" type="password" />
                <Input
                  type="password"
                  name="password2"
                  label="Confirm password"
                />

                {errors.token ? (
                  <Flex fontSize="xs">
                    <Text color="red.400" mr="4">
                      {errors.token}
                    </Text>
                    <NextLink href="/forgot-password">
                      <Link>Try it again</Link>
                    </NextLink>
                  </Flex>
                ) : null}

                <Button
                  mt={4}
                  w="full"
                  type="submit"
                  isLoading={loading}
                  colorScheme="primary"
                >
                  Change
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Container>
  )
}

ChangePassword.getInitialProps = ({ query }) => ({
  token: query.token as string
})

export default withUrqlClient(client, { ssr: false })(ChangePassword)

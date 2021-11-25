import Head from 'next/head'
import { NextPage } from 'next'
import { Button } from '@chakra-ui/button'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Center, Container, Heading } from '@chakra-ui/layout'

import Input from '../../components/Input'
import { passwordSchema } from '../../validation/passwordSchema'
import useAuthService, {
  ChangePasswordValues
} from '../../services/useAuthService'

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const { loading, changePassMutation } = useAuthService()

  return (
    <Container>
      <Head>
        <title>Change password</title>
      </Head>

      <Center h="100vh">
        <Box w="full">
          <Heading textAlign="center" mb={4}>
            Change password
          </Heading>

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

export default ChangePassword

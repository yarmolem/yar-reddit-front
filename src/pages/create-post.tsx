import Head from 'next/head'
import { Button } from '@chakra-ui/button'
import { withUrqlClient } from 'next-urql'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Center, Heading } from '@chakra-ui/layout'

import client from '../graphql/client'
import Input from '../components/Input'
import Alert from '../components/Alert'
import Layout from '../components/Layout'
import Textarea from '../components/Textarea'
import { PostInput } from '../generated/graphql'
import { postSchema } from '../validation/postSchema'
import usePostService from '../services/usePostService'

const CreatePost = () => {
  const { loading, errors, cleanErrors, createPostMutation } = usePostService()

  return (
    <Layout>
      <Head>
        <title>Create Post</title>
      </Head>

      <Center h="calc(100vh - 80px)">
        <Box w="full">
          <Heading textAlign="center" mb={4}>
            Create Post
          </Heading>

          <Alert mb={8} {...{ errors, onClose: cleanErrors }} />

          <Formik
            validate={postSchema}
            onSubmit={createPostMutation}
            initialValues={{ title: '', image: '', content: '' }}
          >
            {(props: FormikProps<PostInput>) => (
              <Form>
                <Input name="title" label="Title" />
                <Input name="image" label="Image Url" />
                <Textarea name="content" label="Content" />

                <Button
                  mt={10}
                  w="full"
                  type="submit"
                  isLoading={loading}
                  colorScheme="primary"
                >
                  Create post
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Center>
    </Layout>
  )
}

export default withUrqlClient(client)(CreatePost)

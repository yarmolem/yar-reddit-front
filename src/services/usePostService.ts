import { useState } from 'react'
import { FormikHelpers } from 'formik'
import { useRouter } from 'next/router'

import {
  PostInput,
  useGetPostQuery,
  useCreatePostMutation
} from '../generated/graphql'
import { Errors } from '../interfaces'

const usePostService = () => {
  const router = useRouter()
  const [variables, setVariables] = useState({
    limit: 5,
    cursor: null as string | null
  })
  const [createData, createPost] = useCreatePostMutation()
  const [errors, setErrors] = useState<Errors>({ ok: true })
  const [{ data, fetching }] = useGetPostQuery({ variables })

  const createPostMutation = async (
    input: PostInput,
    helpers: FormikHelpers<PostInput>
  ) => {
    const post = await createPost({ input })
    if (post.error?.message?.includes('[GraphQL] Not authenticated')) {
      setErrors({
        ok: false,
        msg: {
          title: 'Not Autenticated',
          desc: 'Must be logged to create a post'
        }
      })
      return
    }

    helpers.resetForm()
    router.push('/')
  }

  const loadMorePosts = () => {
    const date = data?.getPosts[data.getPosts.length - 1].createdAt
    const cursor = String(+new Date(date))
    setVariables((v) => ({ ...v, cursor }))
  }

  const cleanErrors = () => setErrors({ ok: true })

  const posts = data ? data.getPosts : []

  return {
    posts,
    errors,
    cleanErrors,
    loadMorePosts,
    createPostMutation,
    loading: fetching || createData.fetching
  }
}

export default usePostService

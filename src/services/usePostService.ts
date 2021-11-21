import { useGetPostQuery } from '../generated/graphql'

const usePostService = () => {
  const [{ data, fetching }] = useGetPostQuery()

  const posts = data ? data.getPosts : []

  return { posts, loading: fetching }
}

export default usePostService

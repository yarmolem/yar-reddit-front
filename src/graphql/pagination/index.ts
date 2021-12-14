import { stringifyVariables } from '@urql/core'
import { Resolver } from '@urql/exchange-graphcache'

export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info

    const allFields = cache.inspectFields(entityKey)
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName)

    const size = fieldInfos.length
    if (size === 0) {
      return undefined
    }

    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`
    const isItInCacheKey = cache.resolve(entityKey, fieldKey) as string
    const isItInCache = cache.resolve(isItInCacheKey, 'posts')

    // console.log('isItInCache: ', isItInCache)

    info.partial = !isItInCache

    let hasMore = true
    const posts: string[] = []
    fieldInfos.forEach((fi) => {
      const key = cache.resolve(entityKey, fi.fieldKey) as string
      const _posts = cache.resolve(key, 'posts') as string[]
      const _hasMore = cache.resolve(key, 'hasMore') as boolean

      if (!_hasMore) hasMore = _hasMore

      posts.push(..._posts)
    })

    console.log({ posts, hasMore })

    return { posts, hasMore, __typename: 'PaginatedPosts' }
  }
}

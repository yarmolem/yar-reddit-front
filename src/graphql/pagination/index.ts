import { stringifyVariables } from '@urql/core'
import { Resolver } from '@urql/exchange-graphcache'

export const cursorPagination = (): Resolver => {
  return (_parent, fieldArgs, cache, info) => {
    const { parentKey: entityKey, fieldName } = info

    // console.log(entityKey, fieldName)

    const allFields = cache.inspectFields(entityKey)
    console.log('allFields:', allFields)
    const fieldInfos = allFields.filter((info) => info.fieldName === fieldName)

    const size = fieldInfos.length
    if (size === 0) {
      return undefined
    }

    const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`
    const isItInCache = cache.resolve(entityKey, fieldKey)

    console.log('isItInCache: ', isItInCache)

    info.partial = !isItInCache

    const results: string[] = []
    fieldInfos.forEach((fi) => {
      const data = cache.resolve(entityKey, fi.fieldKey) as string[]
      results.push(...data)
    })

    console.log('results: ', results)

    return results
  }
}

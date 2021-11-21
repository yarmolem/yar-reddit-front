import { Cache, QueryInput } from '@urql/exchange-graphcache'
import {
  MeQuery,
  MeDocument,
  LoginMutation,
  RegisterMutation,
  LogoutMutation
} from '../../generated/graphql'

function betterUpdateQuery<R, Q>(
  cache: Cache,
  result: any,
  qi: QueryInput,
  fn: (r: R, q: Q) => Q
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any)
}

export const login = (result: LoginMutation, _: any, cache: Cache) => {
  betterUpdateQuery<LoginMutation, MeQuery>(
    cache,
    result,
    { query: MeDocument },
    (res, query) => {
      if (res.login.errors) return query
      return { me: res.login.user }
    }
  )
}

export const logout = (result: LogoutMutation, _: any, cache: Cache) => {
  betterUpdateQuery<LogoutMutation, MeQuery>(
    cache,
    result,
    { query: MeDocument },
    (res, query) => {
      if (!res.logout) return query
      return { me: null }
    }
  )
}

export const register = (result: RegisterMutation, _: any, cache: Cache) => {
  betterUpdateQuery<RegisterMutation, MeQuery>(
    cache,
    result,
    { query: MeDocument },
    (res, query) => {
      if (res.register.errors) return query
      return { me: res.register.user }
    }
  )
}

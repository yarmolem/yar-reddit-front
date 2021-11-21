import { dedupExchange, fetchExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'

import { login, logout, register } from './updates'

/** With provider */
// const client = createClient({
//   url: 'http://localhost:8080/graphql',
//   fetchOptions: { credentials: 'include' },
//   exchanges: [
//     dedupExchange,
//     cacheExchange({
//       updates: {
//         Mutation: {
//           login,
//           logout,
//           register
//         }
//       }
//     }),
//     fetchExchange
//   ]
// })

/** With optional SSR */
const client = (ssrExchange: any) => ({
  url: 'http://localhost:8080/graphql',
  fetchOptions: { credentials: 'include' as const },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login,
          logout,
          register
        }
      }
    }),
    ssrExchange,
    fetchExchange
  ]
})

export default client

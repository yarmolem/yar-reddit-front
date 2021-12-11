// import Router from 'next/router'
import { pipe, tap } from 'wonka'
import { Exchange } from '@urql/core'

// Funcion para manejar errores globales
export const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        // if (error?.message?.includes('[GraphQL] Not authenticated')) {
        //   Router.replace('/login')
        // }
      })
    )
  }

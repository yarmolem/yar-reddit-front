import { useState } from 'react'
import { FormikHelpers } from 'formik'
import { useRouter } from 'next/dist/client/router'

import {
  useMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation
} from '../generated/graphql'
import { toErrorMap } from '../utils/toErrorMap'

type Props = {
  pauseQuery?: boolean
}

interface Errors {
  ok: boolean
  token?: string
}

export interface ChangePasswordValues {
  token: string
  password: string
  password2: string
}

export interface LoginValues {
  password: string
  usernameOrEmail: string
}

export interface RegisterValues {
  email: string
  username: string
  password: string
  password2: string
}

const useAuthService = (props: Props = {}) => {
  const router = useRouter()
  const [errors, setErrors] = useState<Errors>({ ok: true })

  // Query para validar mi usuario
  const [meData] = useMeQuery({ pause: props?.pauseQuery })

  // Mutations para loguear, registrar y cerrar session
  const [loginData, login] = useLoginMutation()
  const [logoutData, logout] = useLogoutMutation()
  const [registerData, register] = useRegisterMutation()
  const [forgotData, forgotPass] = useForgotPasswordMutation()
  const [changePassData, changePass] = useChangePasswordMutation()

  const logoutMutation = async () => {
    const res = await logout()
    console.log('Logout', res)
  }

  const loginMutation = async (
    { usernameOrEmail, password }: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    const res = await login({ usernameOrEmail, password })

    if (res.data?.login.errors) {
      const errors = toErrorMap(res.data?.login.errors)
      setErrors({ ok: false, ...errors })
      return actions.setErrors(errors)
    }

    console.log('Login', res)

    actions.resetForm()
    router.push('/')
  }

  const registerMutation = async (
    { password2, ...input }: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    const res = await register({ input })

    if (res.data?.register.errors) {
      const errors = toErrorMap(res.data?.register.errors)
      setErrors({ ok: false, ...errors })
      return actions.setErrors(errors)
    }

    console.log('REGISTER', res)

    actions.resetForm()
    router.push('/')
  }

  const changePassMutation = async (
    { password, token }: ChangePasswordValues,
    actions: FormikHelpers<ChangePasswordValues>
  ) => {
    const res = await changePass({ password, token })

    if (res.data?.changePassword.errors) {
      const errors = toErrorMap(res.data?.changePassword.errors)
      setErrors({ ok: false, ...errors })
      return actions.setErrors(errors)
    }

    console.log('CHANGE_PASSWORD', res)

    actions.resetForm()
    router.push('/')
  }

  const forgotPassMutation = async (
    { email }: { email: string },
    actions: FormikHelpers<{ email: string }>
  ) => {
    const res = await forgotPass({ email })
    console.log('FORGOT_PASSWORD', res)
    actions.resetForm()
  }

  return {
    loginMutation,
    logoutMutation,
    registerMutation,
    changePassMutation,
    forgotPassMutation,
    errors,
    user: meData.data?.me,
    loading:
      meData.fetching ||
      loginData.fetching ||
      logoutData.fetching ||
      forgotData.fetching ||
      registerData.fetching ||
      changePassData.fetching
  }
}

export default useAuthService

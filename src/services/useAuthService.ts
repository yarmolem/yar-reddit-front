import { FormikHelpers } from 'formik'
import { useRouter } from 'next/dist/client/router'

import { toErrorMap } from '../utils/toErrorMap'
import {
  useMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation
} from '../generated/graphql'

type Props = {
  pauseQuery?: boolean
}

export interface LoginValues {
  username: string
  password: string
}

export interface RegisterValues extends LoginValues {
  password2: string
}

const useAuthService = (props: Props = {}) => {
  const router = useRouter()
  // Query para validar mi usuario
  const [meData] = useMeQuery({ pause: props?.pauseQuery })

  // Mutations para loguear, registrar y cerrar session
  const [loginData, login] = useLoginMutation()
  const [logoutData, logout] = useLogoutMutation()
  const [registerData, register] = useRegisterMutation()

  const logoutMutation = async () => {
    const res = await logout()
    console.log('Logout', res)
  }

  const loginMutation = async (
    input: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    const res = await login({ input })

    if (res.data?.login.errors) {
      const errors = toErrorMap(res.data?.login.errors)
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
      return actions.setErrors(errors)
    }

    console.log('REGISTER', res)

    actions.resetForm()
    router.push('/')
  }

  return {
    loginMutation,
    logoutMutation,
    registerMutation,
    user: meData.data?.me,
    loading:
      meData.fetching ||
      loginData.fetching ||
      logoutData.fetching ||
      registerData.fetching
  }
}

export default useAuthService

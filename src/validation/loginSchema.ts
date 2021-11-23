import validator from 'validator'
import { LoginValues } from '../services/useAuthService'

export const loginSchema = ({ usernameOrEmail, password }: LoginValues) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(usernameOrEmail)) {
    errors.usernameOrEmail = 'The field username or email is mark as required.'
  }
  if (validator.isEmpty(password)) {
    errors.password = 'The field password is mark as required.'
  }

  return errors
}

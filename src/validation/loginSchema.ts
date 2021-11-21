import validator from 'validator'
import { LoginFormValues } from '../interfaces'

export const loginSchema = ({ username, password }: LoginFormValues) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(username)) {
    errors.username = 'The field username is mark as required.'
  }
  if (validator.isEmpty(password)) {
    errors.password = 'The field password is mark as required.'
  }

  return errors
}

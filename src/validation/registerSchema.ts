import validator from 'validator'
import { RegisterFormValues } from '../interfaces'

export const registerSchema = ({
  username,
  password,
  password2
}: RegisterFormValues) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(username)) {
    errors.username = 'The field username is mark as required.'
  }
  if (validator.isEmpty(password)) {
    errors.password = 'The field password is mark as required.'
  }
  if (validator.isEmpty(password2)) {
    errors.password2 = 'The field password is mark as required.'
  }
  if (password !== password2) {
    errors.username = 'The password must be the same.'
  }

  return errors
}

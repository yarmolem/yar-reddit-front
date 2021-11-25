import validator from 'validator'
import { ChangePasswordValues } from '../services/useAuthService'

export const passwordSchema = ({
  password,
  password2
}: ChangePasswordValues) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(password)) {
    errors.password = 'The field password is mark as required.'
  }
  if (validator.isEmpty(password2)) {
    errors.password2 = 'The field confirm password is mark as required.'
  }
  if (password !== password2) {
    errors.password2 = 'Must be the same.'
  }

  return errors
}

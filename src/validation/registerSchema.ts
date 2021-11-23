import validator from 'validator'
import { RegisterValues } from '../services/useAuthService'

export const registerSchema = ({
  email,
  username,
  password,
  password2
}: RegisterValues) => {
  const errors: Record<string, string> = {}

  if (!validator.isEmail(email)) {
    errors.email = 'Invalid email.'
  }
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
    errors.password2 = 'The password must be the same.'
  }

  return errors
}

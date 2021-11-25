import validator from 'validator'

export const forgotSchema = ({ email }: { email: string }) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(email)) {
    errors.email = 'The field email is mark as required.'
  }
  if (!validator.isEmail(email)) {
    errors.email = 'Enter a valid email.'
  }

  return errors
}

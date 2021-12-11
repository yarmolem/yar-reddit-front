import validator from 'validator'
import { PostInput } from '../generated/graphql'

export const postSchema = ({ title, image, content }: PostInput) => {
  const errors: Record<string, string> = {}

  if (validator.isEmpty(title)) {
    errors.title = 'The field title is mark as required.'
  }
  if (validator.isEmpty(image)) {
    errors.image = 'The field image is mark as required.'
  }
  if (validator.isEmpty(content)) {
    errors.content = 'The field content is mark as required.'
  }

  return errors
}

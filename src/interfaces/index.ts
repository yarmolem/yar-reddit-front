export interface LoginFormValues {
  username: string
  password: string
}
export interface RegisterFormValues {
  username: string
  password: string
  password2: string
}

export interface Errors {
  ok: boolean
  msg?: {
    title: string
    desc: string
  }
}

export interface Post {
  id: number;
  likes: number;
  title: string;
  image: string;
  content: string;
  createdAt: string;
  __typename?: "Posts" | undefined;
}

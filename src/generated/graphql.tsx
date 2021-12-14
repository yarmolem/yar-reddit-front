import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createPost: Posts;
  deletePost: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  likeAPost: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updatePost?: Maybe<Posts>;
};


export type MutationChangePasswordArgs = {
  password: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLikeAPostArgs = {
  postId: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: UsernamePasswordInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  hasMore: Scalars['Boolean'];
  posts: Array<Posts>;
};

export type PostInput = {
  content: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type Posts = {
  __typename?: 'Posts';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: Users;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  image: Scalars['String'];
  likes: Scalars['Float'];
  textSnippet: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getPostById?: Maybe<Posts>;
  getPosts: PaginatedPosts;
  me?: Maybe<Users>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetPostsArgs = {
  cursor?: InputMaybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Users>;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['Date'];
  username: Scalars['String'];
};

export const ErrorFramentFragmentDoc = gql`
    fragment ErrorFrament on FieldError {
  field
  message
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on Users {
  id
  email
  username
}
    `;
export const AuthFragmentFragmentDoc = gql`
    fragment AuthFragment on UserResponse {
  errors {
    ...ErrorFrament
  }
  user {
    ...UserFragment
  }
}
    ${ErrorFramentFragmentDoc}
${UserFragmentFragmentDoc}`;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($token: String!, $password: String!) {
  changePassword(token: $token, password: $password) {
    ...AuthFragment
  }
}
    ${AuthFragmentFragmentDoc}`;

export function useChangePasswordMutation() {
  return Urql.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument);
};
export const CreatePostDocument = gql`
    mutation CreatePost($input: PostInput!) {
  createPost(input: $input) {
    id
    title
    image
    content
    likes
    creatorId
  }
}
    `;

export function useCreatePostMutation() {
  return Urql.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export function useForgotPasswordMutation() {
  return Urql.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument);
};
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...AuthFragment
  }
}
    ${AuthFragmentFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($input: UsernamePasswordInput!) {
  register(input: $input) {
    ...AuthFragment
  }
}
    ${AuthFragmentFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetPostDocument = gql`
    query GetPost($limit: Int!, $cursor: String) {
  getPosts(limit: $limit, cursor: $cursor) {
    hasMore
    posts {
      id
      title
      image
      likes
      textSnippet
      createdAt
      updatedAt
      creator {
        id
        username
      }
    }
  }
}
    `;

export function useGetPostQuery(options: Omit<Urql.UseQueryArgs<GetPostQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPostQuery>({ query: GetPostDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export type AuthFragmentFragment = { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined };

export type ErrorFramentFragment = { __typename?: 'FieldError', field: string, message: string };

export type UserFragmentFragment = { __typename?: 'Users', id: number, email: string, username: string };

export type ChangePasswordMutationVariables = Exact<{
  token: Scalars['String'];
  password: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined } };

export type CreatePostMutationVariables = Exact<{
  input: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Posts', id: number, title: string, image: string, content: string, likes: number, creatorId: number } };

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword: boolean };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  input: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined } };

export type GetPostQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: InputMaybe<Scalars['String']>;
}>;


export type GetPostQuery = { __typename?: 'Query', getPosts: { __typename?: 'PaginatedPosts', hasMore: boolean, posts: Array<{ __typename?: 'Posts', id: number, title: string, image: string, likes: number, textSnippet: string, createdAt: any, updatedAt: any, creator: { __typename?: 'Users', id: number, username: string } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Users', id: number, email: string, username: string } | null | undefined };

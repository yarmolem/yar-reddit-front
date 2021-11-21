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
  createPost: Posts;
  deletePost: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updatePost?: Maybe<Posts>;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  input: UsernamePasswordInput;
};


export type MutationRegisterArgs = {
  input: UsernamePasswordInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type Posts = {
  __typename?: 'Posts';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  getPostById?: Maybe<Posts>;
  getPosts: Array<Posts>;
  me?: Maybe<Users>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['Float'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<Users>;
};

export type UsernamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Users = {
  __typename?: 'Users';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on Users {
  id
  username
}
    `;
export const LoginDocument = gql`
    mutation Login($input: UsernamePasswordInput!) {
  login(input: $input) {
    user {
      ...UserFragment
    }
    errors {
      field
      message
    }
  }
}
    ${UserFragmentFragmentDoc}`;

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
    user {
      ...UserFragment
    }
    errors {
      field
      message
    }
  }
}
    ${UserFragmentFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const GetPostDocument = gql`
    query getPost {
  getPosts {
    id
    title
    createdAt
    updatedAt
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
export type UserFragmentFragment = { __typename?: 'Users', id: number, username: string };

export type LoginMutationVariables = Exact<{
  input: UsernamePasswordInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', user?: { __typename?: 'Users', id: number, username: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  input: UsernamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', user?: { __typename?: 'Users', id: number, username: string } | null | undefined, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type GetPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostQuery = { __typename?: 'Query', getPosts: Array<{ __typename?: 'Posts', id: number, title: string, createdAt: any, updatedAt: any }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Users', id: number, username: string } | null | undefined };

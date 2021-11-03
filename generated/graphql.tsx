import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
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
};

export type DeleteMessage = {
  __typename?: 'DeleteMessage';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteNote: DeleteMessage;
  login?: Maybe<User>;
  register: User;
  updateNote: Note;
  writeNote: Note;
};


export type MutationDeleteNoteArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateNoteArgs = {
  data: UpdateNoteInput;
  id: Scalars['String'];
};


export type MutationWriteNoteArgs = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Note = {
  __typename?: 'Note';
  body: Scalars['String'];
  date: Scalars['Float'];
  id: Scalars['ID'];
  title: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  getNote: Note;
  getNotes: Array<Note>;
  getUser: User;
  getUsers: Array<User>;
  hello: Scalars['String'];
  me?: Maybe<User>;
};


export type QueryGetNoteArgs = {
  id: Scalars['String'];
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};

export type UpdateNoteInput = {
  body?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  notes: Array<Note>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'User', id: string, email: string, firstName: string, lastName: string } | null | undefined };

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, firstName: string, lastName: string, email: string, notes: Array<{ __typename?: 'Note', id: string, title: string, body: string, date: number }> } | null | undefined };

export type GetMyNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyNotesQuery = { __typename?: 'Query', me?: { __typename?: 'User', notes: Array<{ __typename?: 'Note', id: string, body: string, title: string, date: number }> } | null | undefined };

export type NoteByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type NoteByIdQuery = { __typename?: 'Query', getNote: { __typename?: 'Note', id: string, body: string, title: string, date: number } };


export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    email
    firstName
    lastName
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const GetMeDocument = gql`
    query getMe {
  me {
    id
    firstName
    lastName
    email
    notes {
      id
      title
      body
      date
    }
  }
}
    `;

export function useGetMeQuery(options: Omit<Urql.UseQueryArgs<GetMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeQuery>({ query: GetMeDocument, ...options });
};
export const GetMyNotesDocument = gql`
    query getMyNotes {
  me {
    notes {
      id
      body
      title
      date
    }
  }
}
    `;

export function useGetMyNotesQuery(options: Omit<Urql.UseQueryArgs<GetMyNotesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyNotesQuery>({ query: GetMyNotesDocument, ...options });
};
export const NoteByIdDocument = gql`
    query noteById($id: String!) {
  getNote(id: $id) {
    id
    body
    title
    date
  }
}
    `;

export function useNoteByIdQuery(options: Omit<Urql.UseQueryArgs<NoteByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<NoteByIdQuery>({ query: NoteByIdDocument, ...options });
};
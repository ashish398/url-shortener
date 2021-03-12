import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type AllUrLsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllUrLsQuery = (
  { __typename?: 'Query' }
  & { queryURL?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'URL' }
    & Pick<Types.Url, 'id' | 'long_url' | 'short_url'>
  )>>> }
);

export type AddUrlMutationVariables = Types.Exact<{
  url: Types.AddUrlInput;
}>;


export type AddUrlMutation = (
  { __typename?: 'Mutation' }
  & { addURL?: Types.Maybe<(
    { __typename?: 'AddURLPayload' }
    & { uRL?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'URL' }
      & Pick<Types.Url, 'id' | 'short_url' | 'long_url'>
    )>>> }
  )> }
);


export const AllUrLsDocument = gql`
    query allURLs {
  queryURL {
    id
    long_url
    short_url
  }
}
    `;

/**
 * __useAllUrLsQuery__
 *
 * To run a query within a React component, call `useAllUrLsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUrLsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUrLsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUrLsQuery(baseOptions?: Apollo.QueryHookOptions<AllUrLsQuery, AllUrLsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUrLsQuery, AllUrLsQueryVariables>(AllUrLsDocument, options);
      }
export function useAllUrLsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUrLsQuery, AllUrLsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUrLsQuery, AllUrLsQueryVariables>(AllUrLsDocument, options);
        }
export type AllUrLsQueryHookResult = ReturnType<typeof useAllUrLsQuery>;
export type AllUrLsLazyQueryHookResult = ReturnType<typeof useAllUrLsLazyQuery>;
export type AllUrLsQueryResult = Apollo.QueryResult<AllUrLsQuery, AllUrLsQueryVariables>;
export const AddUrlDocument = gql`
    mutation addURL($url: AddURLInput!) {
  addURL(input: [$url]) {
    uRL {
      id
      short_url
      long_url
    }
  }
}
    `;
export type AddUrlMutationFn = Apollo.MutationFunction<AddUrlMutation, AddUrlMutationVariables>;

/**
 * __useAddUrlMutation__
 *
 * To run a mutation, you first call `useAddUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUrlMutation, { data, loading, error }] = useAddUrlMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddUrlMutation(baseOptions?: Apollo.MutationHookOptions<AddUrlMutation, AddUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUrlMutation, AddUrlMutationVariables>(AddUrlDocument, options);
      }
export type AddUrlMutationHookResult = ReturnType<typeof useAddUrlMutation>;
export type AddUrlMutationResult = Apollo.MutationResult<AddUrlMutation>;
export type AddUrlMutationOptions = Apollo.BaseMutationOptions<AddUrlMutation, AddUrlMutationVariables>;
export const namedOperations = {
  Query: {
    allURLs: 'allURLs'
  },
  Mutation: {
    addURL: 'addURL'
  }
}
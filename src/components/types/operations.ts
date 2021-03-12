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
export const namedOperations = {
  Query: {
    allURLs: 'allURLs'
  }
}
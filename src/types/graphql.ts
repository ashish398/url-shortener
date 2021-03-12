export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};














export type UrlOrder = {
  asc?: Maybe<UrlOrderable>;
  desc?: Maybe<UrlOrderable>;
  then?: Maybe<UrlOrder>;
};

export type UrlPatch = {
  short_url?: Maybe<Scalars['String']>;
  long_url?: Maybe<Scalars['String']>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type Query = {
  __typename?: 'Query';
  getURL?: Maybe<Url>;
  queryURL?: Maybe<Array<Maybe<Url>>>;
  aggregateURL?: Maybe<UrlAggregateResult>;
};


export type QueryGetUrlArgs = {
  id: Scalars['ID'];
};


export type QueryQueryUrlArgs = {
  filter?: Maybe<UrlFilter>;
  order?: Maybe<UrlOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateUrlArgs = {
  filter?: Maybe<UrlFilter>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AddUrlPayload = {
  __typename?: 'AddURLPayload';
  uRL?: Maybe<Array<Maybe<Url>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddUrlPayloadURlArgs = {
  filter?: Maybe<UrlFilter>;
  order?: Maybe<UrlOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UrlAggregateResult = {
  __typename?: 'URLAggregateResult';
  count?: Maybe<Scalars['Int']>;
  short_urlMin?: Maybe<Scalars['String']>;
  short_urlMax?: Maybe<Scalars['String']>;
  long_urlMin?: Maybe<Scalars['String']>;
  long_urlMax?: Maybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export enum UrlOrderable {
  ShortUrl = 'short_url',
  LongUrl = 'long_url'
}

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type DeleteUrlPayload = {
  __typename?: 'DeleteURLPayload';
  uRL?: Maybe<Array<Maybe<Url>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteUrlPayloadURlArgs = {
  filter?: Maybe<UrlFilter>;
  order?: Maybe<UrlOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type UpdateUrlPayload = {
  __typename?: 'UpdateURLPayload';
  uRL?: Maybe<Array<Maybe<Url>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateUrlPayloadURlArgs = {
  filter?: Maybe<UrlFilter>;
  order?: Maybe<UrlOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}


export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addURL?: Maybe<AddUrlPayload>;
  updateURL?: Maybe<UpdateUrlPayload>;
  deleteURL?: Maybe<DeleteUrlPayload>;
};


export type MutationAddUrlArgs = {
  input: Array<AddUrlInput>;
};


export type MutationUpdateUrlArgs = {
  input: UpdateUrlInput;
};


export type MutationDeleteUrlArgs = {
  filter: UrlFilter;
};

export type Url = {
  __typename?: 'URL';
  id: Scalars['ID'];
  short_url: Scalars['String'];
  long_url: Scalars['String'];
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};


export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type UrlFilter = {
  id?: Maybe<Array<Scalars['ID']>>;
  has?: Maybe<UrlHasFilter>;
  and?: Maybe<Array<Maybe<UrlFilter>>>;
  or?: Maybe<Array<Maybe<UrlFilter>>>;
  not?: Maybe<UrlFilter>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type AddUrlInput = {
  short_url: Scalars['String'];
  long_url: Scalars['String'];
};

export type UpdateUrlInput = {
  filter: UrlFilter;
  set?: Maybe<UrlPatch>;
  remove?: Maybe<UrlPatch>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type UrlRef = {
  id?: Maybe<Scalars['ID']>;
  short_url?: Maybe<Scalars['String']>;
  long_url?: Maybe<Scalars['String']>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export enum UrlHasFilter {
  ShortUrl = 'short_url',
  LongUrl = 'long_url'
}

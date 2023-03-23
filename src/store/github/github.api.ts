import { Repo } from './../../models/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ServerResponse, User } from '@models/api';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    searchUsers: builder.query<User[], string>({
      query: (search) => ({
        url: 'search/users',
        params: {
          q: search,
          per_page: 10,
        },
      }),
      transformResponse: (response: ServerResponse<User>) => response.items,
    }),
    getUserRepos: builder.query<Repo[], string>({
      query: (username) => ({
        url: `users/${username}/repos`,
      }),
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;

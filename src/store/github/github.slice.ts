import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Repo } from '@models/api';

const LS_FAV_KEY = 'GH_FAV_KEY';

export type FavouriteRepo = Pick<
  Repo,
  'id' | 'html_url' | 'full_name' | 'forks' | 'watchers' | 'description'
>;

type GithubState = {
  favourites: FavouriteRepo[];
};

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<FavouriteRepo>) => {
      state.favourites.push({
        id: action.payload.id,
        html_url: action.payload.html_url,
        full_name: action.payload.full_name,
        forks: action.payload.forks,
        watchers: action.payload.watchers,
        description: action.payload.description,
      });
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.favourites = state.favourites.filter((repo) => repo.id !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;

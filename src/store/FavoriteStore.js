import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    favorites: [],
    page: 1
  }

  const favorite_slice = createSlice({
    name: 'favoriteReducer',
    initialState,
    reducers: {
      addFavorite: (state, action) => {
        state.favorites.push(action.payload);
      },
      removeFavorite: (state, action) => {
        const index = state.favorites.findIndex((item) => item.id === action.payload);
        state.favorites.splice(index, 1);
      },
      incrementPage: (state) => {
        state.page += 1;
      },
    },
  })

export const favoriteAction = favorite_slice.actions

export default favorite_slice
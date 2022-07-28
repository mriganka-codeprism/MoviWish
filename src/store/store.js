import favorite_slice from "./FavoriteStore"
import { configureStore } from "@reduxjs/toolkit/"

const store = configureStore({
    reducer: {favorite: favorite_slice.reducer}
})

export default store
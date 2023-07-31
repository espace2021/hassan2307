import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scategoriesReducer from "../features/scategorieSlice"
import categoriesReducer from "../features/categorieSlice"

const store = configureStore({
reducer: {
storecart:cartSliceReducer,
storearticles:articlesReducer,
storescategories: scategoriesReducer,
storecategories:categoriesReducer,
}
})
export default store

import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"
import scategoriesReducer from "../features/scategorieSlice"
const store = configureStore({
reducer: {
storecart:cartSliceReducer,
storearticles:articlesReducer,
storescategories: scategoriesReducer,

}
})
export default store

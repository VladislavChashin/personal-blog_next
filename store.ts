import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './pages/components/stories/slice'
const store = configureStore({
  reducer: counterReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store

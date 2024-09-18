import { configureStore } from '@reduxjs/toolkit'
import dayPlannerReducer from './reducers/dayPlanner'
import writingAssistantReducer from './reducers/writingAssistant'

export const store = configureStore({
  reducer: {
    dayPlanner: dayPlannerReducer,
    writingAssistant: writingAssistantReducer,
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
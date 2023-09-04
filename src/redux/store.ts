import {configureStore} from '@reduxjs/toolkit';
import eventsReducer from './eventsSlice';
import eventReducer from './eventDetailSlice';
import categoriesReducer from './categoriesSlice';

export const store = configureStore({
  reducer: {
    events: eventsReducer,
    event: eventReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

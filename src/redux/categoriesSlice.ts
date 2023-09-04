import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';
import {getCategories} from '../api/categories';

export const fetchCategories = createAsyncThunk('getCategories', async () => {
  const data = await getCategories();
  return data;
});
// Define a type for the slice state
interface EventsStateProps {
  categories: Array<string>;
  isLoading: boolean | undefined;
  error: string | undefined;
}

// Define the initial state using that type
const initialState: EventsStateProps = {
  categories: [],
  isLoading: false,
  error: undefined,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = categoriesSlice.actions;

export default categoriesSlice.reducer;

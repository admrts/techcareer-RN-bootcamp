import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {EventsDataProps} from '../api/events';
import {getEventById} from '../api/events';

export const getSingleEvent = createAsyncThunk(
  'getEventById',
  async (id: number | string) => {
    const data = await getEventById(id);
    return data;
  },
);
// Define a type for the slice state
interface EventsStateProps {
  eventData: EventsDataProps | undefined;
  isLoading: boolean | undefined;
  error: string | undefined;
}

// Define the initial state using that type
const initialState: EventsStateProps = {
  eventData: undefined,
  isLoading: false,
  error: undefined,
};

export const eventDetailSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getSingleEvent.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getSingleEvent.fulfilled, (state, action) => {
      state.eventData = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getSingleEvent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = eventDetailSlice.actions;

export default eventDetailSlice.reducer;

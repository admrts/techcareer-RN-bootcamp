import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';
import {EventsDataProps} from '../api/events';
import {getAllEvents} from '../api/events';

export const getEvents = createAsyncThunk('getAllEvents', async () => {
  const data = await getAllEvents();
  return data;
});
// Define a type for the slice state
interface EventsStateProps {
  events: Array<EventsDataProps>;
  isLoading: boolean | undefined;
  error: string | undefined;
}

// Define the initial state using that type
const initialState: EventsStateProps = {
  events: [],
  isLoading: false,
  error: undefined,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getEvents.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.events = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = eventsSlice.actions;

export default eventsSlice.reducer;

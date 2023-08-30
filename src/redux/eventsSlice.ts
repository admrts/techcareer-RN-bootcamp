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
  initialEvents: Array<EventsDataProps>;
  lastEvents: Array<EventsDataProps>;
  isLoading: boolean | undefined;
  error: string | undefined;
}

// Define the initial state using that type
const initialState: EventsStateProps = {
  initialEvents: [],
  lastEvents: [],
  isLoading: false,
  error: undefined,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    searchValue: (state, action: PayloadAction<string>) => {
      if (action.payload == '') {
        state.lastEvents = state.initialEvents;
      }
      state.lastEvents = state.initialEvents.filter(item => {
        return (
          item.name.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.category.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.city.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.date.toLowerCase().includes(action.payload.toLowerCase()) ||
          item.time.toLowerCase().includes(action.payload.toLowerCase())
        );
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(getEvents.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getEvents.fulfilled, (state, action) => {
      state.initialEvents = action.payload;
      state.lastEvents = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {searchValue} = eventsSlice.actions;

export default eventsSlice.reducer;

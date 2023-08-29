import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';
import {EventsDataProps} from '../api/events';

// Define a type for the slice state
interface EventsState {
  events: EventsDataProps[];
  counter: number;
}

// Define the initial state using that type
const initialState: EventsState = {
  events: [],
  counter: 0,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    increment: state => {
      state.counter += 1;
    },
  },
});

export const {increment} = eventsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default eventsSlice.reducer;

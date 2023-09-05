import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {EventsDataProps} from '../api/events';
import {getAllTickets, TickectsIdsProps} from '../api/getTicket';

export const getTickets = createAsyncThunk('getTickets', async () => {
  const data = await getAllTickets();
  return data;
});
// Define a type for the slice state
interface TicketStateProps {
  ticketsIds: Array<TickectsIdsProps>;
  isLoading: boolean | undefined;
  error: string | undefined;
}

// Define the initial state using that type
const initialState: TicketStateProps = {
  ticketsIds: [],
  isLoading: false,
  error: undefined,
};

export const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getTickets.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.ticketsIds = action.payload;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getTickets.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const {} = ticketsSlice.actions;

export default ticketsSlice.reducer;

import {axios} from '../lib/axios';

export interface TickectsIdsProps {
  id: number;
}

export async function getAllTickets(): Promise<TickectsIdsProps[]> {
  const {data} = await axios.get('/tickets');
  return data;
}

import {axios} from '../lib/axios';

export async function deleteTicket(id: string) {
  const data = await axios.delete(`/tickets/${id}`);
  return data;
}

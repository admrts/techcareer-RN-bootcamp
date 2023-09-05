import {axios} from '../lib/axios';

export async function buyTicket(id: string) {
  try {
    const data = await axios.post('/tickets', {id});
    return data.status;
  } catch (error) {
    return error;
  }
}

import {axios} from '../lib/axios';

export async function buyTicket(id: string) {
  try {
    const data = await axios.post('/tickets', {id});
    console.log(data.status);
    return data.status;
  } catch (error) {
    console.log(error);
    return error;
  }
}

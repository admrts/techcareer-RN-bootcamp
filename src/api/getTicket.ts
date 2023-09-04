import {axios} from '../lib/axios';

export async function getAllTickets(): Promise<string[]> {
  const {data} = await axios.get('/tickets');
  console.log(data);
  return data;
}

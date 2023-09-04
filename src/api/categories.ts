import {axios} from '../lib/axios';

export async function getCategories(): Promise<string[]> {
  const {data} = await axios.get('/categories');
  return data;
}

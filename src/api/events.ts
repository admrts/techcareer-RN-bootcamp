import {axios} from '../lib/axios';

export interface EventsDataProps {
  id: string;
  category: string;
  name: string;
  city: string;
  location: string;
  imageUrl: string;
  date: string;
  time: string;
  rules: Array<string>;
  price: string;
}

// get all events
export async function getAllEvents(): Promise<EventsDataProps[]> {
  const {data} = await axios.get('/events');
  return data;
}

// get event by id
export async function getEventById(
  id: string | number,
): Promise<EventsDataProps> {
  const {data} = await axios.get(`/events/${id}`);
  return data;
}

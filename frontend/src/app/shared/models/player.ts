import { ridesInGroup, daysOfWeek} from './shared.model';

export class Player {
  id?: number;
  username: string;
  email: string;
  city: string;
  ride: ridesInGroup;
  days: string; // 'Mon,Tue,Fri'
  createdAt: string;
}

import {Player} from './player';

export class ApiResponse {
  data: Player[] | any;
  satus: number;
  error: string;
};

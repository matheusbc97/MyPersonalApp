import {Country} from '@/shared/types/Country';

export interface City {
  name: string;
  description: string;
  country: Country;
  id: string;
}

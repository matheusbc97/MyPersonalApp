import {sub, Duration} from 'date-fns';

function subTimeToDate(date: Date, duration: Duration) {
  return sub(date, duration);
}

export default subTimeToDate;

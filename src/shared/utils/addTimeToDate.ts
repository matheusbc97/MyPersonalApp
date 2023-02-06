import {add, Duration} from 'date-fns';

function addTimeToDate(date: Date, duration: Duration) {
  return add(date, duration);
}

export default addTimeToDate;

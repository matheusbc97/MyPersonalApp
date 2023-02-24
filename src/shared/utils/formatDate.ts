import {format as DateFNSFormat} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export type FormatTypes =
  | 'date'
  | 'time'
  | 'dateAndTime'
  | 'dateOfMonthAndYear'
  | 'dateOfMonth'
  | 'date/Month'
  | 'month'
  | 'yearAndMonth'
  | 'yyyy-MM';

function getDateFormat(formatType: FormatTypes) {
  switch (formatType) {
    case 'time':
      return "HH:mm'h'";
    case 'dateAndTime':
      return "dd/MM/yyyy 'às' HH:mm'h'";
    case 'dateOfMonth':
      return 'dd MMM';
    case 'date/Month':
      return 'dd/MM';
    case 'yyyy-MM':
      return 'yyyy/MM';
    case 'dateOfMonthAndYear':
      return "dd 'de' MMM, yyyy";
    case 'month':
      return 'MMM';
    case 'yearAndMonth':
      return 'MMMM yyyy';
    default:
      return 'dd/MM/yyyy';
  }
}

export default function formatDate(
  value: string | Date | null | number,
  format: FormatTypes = 'date',
) {
  if (!value) {
    return DateFNSFormat(new Date(), getDateFormat(format), {
      locale: ptBR,
    });
  }

  if (typeof value === 'string') {
    return DateFNSFormat(new Date(value), getDateFormat(format), {
      locale: ptBR,
    });
  }

  return DateFNSFormat(value, getDateFormat(format), {locale: ptBR});
}

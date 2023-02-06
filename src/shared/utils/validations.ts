import {Currency, FinanceType, Group} from '@/shared/types';

type ValidationValue<T> = T | null | undefined;

function _validationFn<T = string>(
  validation: (value: ValidationValue<T>, required: boolean) => void,
) {
  return (required: boolean = true) =>
    (value: ValidationValue<T>) =>
      validation(value, required);
}

const name = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const series = _validationFn<number | null>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const repetitions = _validationFn<number | null>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const weight = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const paymentMethod = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const currency = _validationFn<Currency>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const amount = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const group = _validationFn<Group>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const financeType = _validationFn<FinanceType>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const financeDateType = _validationFn<FinanceType>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const day = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  const dayNumber = Number(value);

  if (dayNumber > 31) {
    return 'Valor máximo é 31';
  }

  return '';
});

const description = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const fromDate = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const untilDate = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const expiringDate = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const lastFourDigits = _validationFn<number | null>((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  if (String(value).length < 4) {
    return 'Obrigatório ter 4 digítos';
  }

  return '';
});

const paid = _validationFn<boolean | null>((value, required) => {
  if (value === null) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

const country = _validationFn((value, required) => {
  if (!value) {
    return required ? 'Campo Obrigatório' : '';
  }

  return '';
});

export default {
  name,
  paymentMethod,
  currency,
  amount,
  group,
  financeType,
  day,
  financeDateType,
  description,
  fromDate,
  untilDate,
  lastFourDigits,
  expiringDate,
  series,
  repetitions,
  weight,
  paid,
  country,
};

import {TextInputHandles} from '../components';

export interface FormHandles<T> {
  submit: () => {
    isValid: boolean;
    form: T;
  };
  form: Record<keyof T, TextInputHandles | undefined>;
}

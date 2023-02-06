import {CustomApiErrorCode} from './CustomApiErrorCode';

export interface CustomError {
  clientMessage: string;
  customErrorCode: CustomApiErrorCode | null;
}

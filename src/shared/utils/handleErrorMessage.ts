import {CustomError, CustomApiErrorCode} from '@/shared/types';

export default function handleErrorMessage(error: any): CustomError {
  let clientMessage = '';
  let customErrorCode: CustomApiErrorCode | null = null;

  if (error.message === 'Network Error') {
    clientMessage = 'Sem conexão com a internet';
    customErrorCode = 'WITHOUT_NETWORK';
  }

  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response.status >= 400 && error.response.status <= 499) {
      if (error.response.data?.clientMessage) {
        clientMessage = error.response.data.clientMessage;
      } else if (error.response.status && error.response.status === 401) {
        clientMessage = 'Usuário não autenticado';
      }
    }
    console.log('[Error Data]', error.response.data);
    console.log('[Error Status]', error.response.status);
    console.log('[Error Headers]', error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    if (error.code === 'ECONNABORTED') {
      clientMessage = 'O servidor não respondeu a tempo';
      customErrorCode = 'SERVER_DID_NOT_ANSWER_ON_TIME';
    } else {
      console.log('[Error Request]', 'no response was received', error.request);
    }
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error setting up the request', error.message);
  }
  console.log(error.config);

  if (clientMessage === '') {
    clientMessage = 'Ocorreu um erro inesperado';
    customErrorCode = 'UNEXPECTED_ERROR';
  }

  return {
    clientMessage,
    customErrorCode,
  };
}

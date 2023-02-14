import {loaderHandler} from '@/shared/components/LoadingHandler';
import handleErrorMessage from '@/shared/utils/handleErrorMessage';
import {useCallback} from 'react';

import {useQueryClient, useMutation} from 'react-query';

type ActionThunk = (...args: any) => Promise<any>;

export interface SendRequestOptions {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
}

type KeyToInvalidate = string | (string | number)[];

interface UseSendRequestProps<T> extends SendRequestOptions {
  promise: T;
  keyToInvalidate?: KeyToInvalidate;
}

interface MutateOptions {
  keyToInvalidate: KeyToInvalidate;
}

function useSendRequest<T extends ActionThunk>({
  keyToInvalidate,
  promise,
  onSuccess,
  onError,
  onSettled,
}: UseSendRequestProps<T>) {
  const queryClient = useQueryClient();

  const mutation = useMutation(promise, {
    onSuccess: () => {
      keyToInvalidate && queryClient.invalidateQueries(keyToInvalidate);
      //onSuccess?.();
    },
    onError: error => {
      handleErrorMessage(error);

      onError?.();
    },
    onSettled: () => {
      loaderHandler.hideLoader();
      onSettled?.();
    },
  });

  const mutate = useCallback(
    (params: Parameters<T>[0], options?: MutateOptions) => {
      loaderHandler.showLoader();

      return new Promise<void>((resolve, reject) => {
        mutation.mutate(params, {
          onSuccess: async () => {
            if (options?.keyToInvalidate) {
              await queryClient.invalidateQueries(options.keyToInvalidate);
              resolve();
            }
          },
          onError: () => {
            reject();
          },
        });
      });
    },
    [mutation, queryClient],
  );

  return mutate;
}

export default useSendRequest;

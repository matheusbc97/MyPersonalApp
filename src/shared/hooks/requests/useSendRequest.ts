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

interface UseSendRequestProps extends SendRequestOptions {
  promise: ActionThunk;
  keyToInvalidate: string | string[] | string[][];
}

function useSendRequest<T extends ActionThunk>({
  keyToInvalidate,
  promise,
  onSuccess,
  onError,
  onSettled,
}: UseSendRequestProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation(promise, {
    onSuccess: () => {
      if (Array.isArray(keyToInvalidate) && Array.isArray(keyToInvalidate[0])) {
        keyToInvalidate.forEach(key => {
          queryClient.invalidateQueries(key);
        });
      } else {
        queryClient.invalidateQueries(keyToInvalidate);
      }

      onSuccess?.();
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
    (params: Parameters<T>) => {
      loaderHandler.showLoader();
      mutation.mutate(params);
    },
    [mutation],
  );

  return mutate;
}

export default useSendRequest;

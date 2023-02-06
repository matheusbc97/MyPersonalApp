import { createGymTrainingService } from '@/services/api/GymService';
import { IGymTrainingForm } from '@/shared/components';
import { loaderHandler } from '@/shared/components/LoadingHandler';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';
import handleErrorMessage from '@/shared/utils/handleErrorMessage';
import {useNavigation} from '@react-navigation/native';
import { useCallback } from 'react';

import {useQueryClient, useMutation} from 'react-query';


type ActionThunk = (...args: any) => Promise<any>;

interface UseSendRequestProps<T extends ActionThunk> {
    promise: ActionThunk;
    onSuccess?: () => void;
    keyToInvalidate: string | string[] | string[][];
}

function useSendRequest<T extends ActionThunk>({
    keyToInvalidate,
    promise,
    onSuccess
}: UseSendRequestProps<T>){
    const queryClient = useQueryClient();

    const mutation = useMutation(promise, {
        onSuccess: () => {
            if(Array.isArray(keyToInvalidate) && Array.isArray(keyToInvalidate[0])){
                keyToInvalidate.forEach((key) => {
                    queryClient.invalidateQueries(key);
                })
            } else {
                queryClient.invalidateQueries(keyToInvalidate);
            }
            
            onSuccess?.();
        },
        onError: (error) => {
            handleErrorMessage(error)
        },
        onSettled: loaderHandler.hideLoader,
    });

    const mutate = useCallback((params:Parameters<T>) => mutation.mutate(params), []);

    return mutate;
}

interface UseCreateGymProps {
    onSuccess?: () => void;
}

const useCreateGym = ({onSuccess}: UseCreateGymProps = {}) => {
  const createGym = useSendRequest({keyToInvalidate:QUERY_KEYS.GYM_TRAININGS, promise: createGymTrainingService, onSuccess})

  return createGym;
};

export default useCreateGym;

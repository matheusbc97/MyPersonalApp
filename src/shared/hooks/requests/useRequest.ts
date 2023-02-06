import {useState, useCallback, DependencyList} from 'react';

type Data<T extends ActionThunk> = Unwrap<ReturnType<T>> extends Array<infer U>
  ? U[]
  : Unwrap<ReturnType<T>> | null;

interface State<T extends ActionThunk> {
  data: Data<T>;
  isLoading: boolean;
  hasError: boolean;
}

interface RequestReturn<T extends ActionThunk> {
  data: Data<T>;
  isLoading: boolean;
  hasError: boolean;
  getData: (...args: Parameters<T>) => Promise<void>;
}

type Unwrap<T> = T extends Promise<infer U> ? U : T;

type ActionThunk = (...args: any) => Promise<any>;

interface Options {
  loadAtStart?: boolean;
  isArray?: boolean;
}

const initialState = {
  data: null,
  isLoading: false,
  hasError: false,
};

function getInitialState<T extends ActionThunk>(options?: Options): State<T> {
  if (options?.isArray ? [] : null) {
    return {
      ...initialState,
      data: [],
    };
  }

  return {
    ...initialState,
  };
}

function useRequest<T extends ActionThunk>(
  receivedFunction: T,
  options?: Options,
  dependencies: DependencyList = [],
): RequestReturn<T> {
  const [state, setState] = useState<State<T>>({
    ...getInitialState(options),
    isLoading: !!options && options.loadAtStart,
  });

  const getData = useCallback(
    async args => {
      setState(prevState => {
        if (!prevState.isLoading) {
          return {
            ...getInitialState(options),
            data: prevState.data,
            isLoading: true,
          };
        }

        return prevState;
      });

      try {
        const response = await Promise.resolve(receivedFunction(args));

        setState({
          data: response,
          isLoading: false,
          hasError: false,
        });
      } catch (error) {
        console.log('error', error);
        setState({
          ...getInitialState(),
          hasError: true,
        });
      }
    },
    [setState, ...dependencies],
  );

  return {
    ...state,
    getData,
  };
}

export default useRequest;

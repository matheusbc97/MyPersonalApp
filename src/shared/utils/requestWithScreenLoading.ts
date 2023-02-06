import {loaderHandler} from '@/shared/components/LoadingHandler';
import handleErrorMessage from '@/shared/utils/handleErrorMessage';

type ActionThunk = (...args: any) => Promise<any>;

async function requestWithScreenLoading<T extends ActionThunk>(
  receivedFunction: T,
): Promise<ReturnType<T>> {
  try {
    loaderHandler.showLoader();
    const response = await receivedFunction();

    return response;
  } catch (error) {
    const customError = handleErrorMessage(error);

    throw customError;
  } finally {
    loaderHandler.hideLoader();
  }
}

export default requestWithScreenLoading;

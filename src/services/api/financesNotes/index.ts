import mockRequest from '@/shared/utils/mockRequest';
import {getFinancesNoteSectionsMock} from '@/mocks/finances';
import mockCreateFinanceNote from '@/mocks/functions/mockCreateFinanceNote';
import mockUpdateFinanceNote from '@/mocks/functions/mockUpdateFinanceNote';

import apiService from '../apiService';

import {SectionDataWithTotal, FinanceNote} from '@/shared/types';

import {
  CreateFinanceNoteParams,
  UpdateFinanceNoteParams,
} from '../finances/types';
import {
  createFinanceNoteRequest,
  updateFinanceNoteRequest,
  getFinancesNotesRequest,
} from '@/requests/finances/financesNotes';
import {getFinanceNotesSections} from './utils';

export function createFinanceNoteService(
  params: CreateFinanceNoteParams,
): Promise<null> {
  return apiService({
    api: createFinanceNoteRequest(params),
    mock: mockCreateFinanceNote(params),
  });
}

export function updateFinanceNoteService(
  params: UpdateFinanceNoteParams,
): Promise<null> {
  return apiService({
    api: updateFinanceNoteRequest(params),
    mock: mockRequest(null),
  });
}

export async function fetchFinanceNotesService(): Promise<
  SectionDataWithTotal<FinanceNote>
> {
  const response = (await apiService({
    api: getFinancesNotesRequest(),
    mock: mockRequest(getFinancesNoteSectionsMock()),
  })) as FinanceNote[];

  return getFinanceNotesSections(response);
}

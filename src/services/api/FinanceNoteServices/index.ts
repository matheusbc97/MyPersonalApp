import mockRequest from '@/shared/utils/mockRequest';
import {getFinancesNoteSectionsMock} from '@/mocks/finances';
import mockCreateFinanceNote from '@/mocks/functions/mockCreateFinanceNote';
import mockUpdateFinanceNote from '@/mocks/functions/mockUpdateFinanceNote';

import apiService from '../apiService';

import {CreateFinanceNoteParams, UpdateFinanceNoteParams} from './types';
import {SectionDataWithTotal, FinanceNote} from '@/shared/types';

import {
  fetchFinanceNotes,
  createFinanceNote,
  updateFinanceNote,
} from '@/shared/firebase';

export function createFinanceNoteService(
  params: CreateFinanceNoteParams,
): Promise<null> {
  return apiService({
    api: createFinanceNote(params),
    mock: mockCreateFinanceNote(params),
  });
}

export function updateFinanceNoteService(
  id: string,
  params: UpdateFinanceNoteParams,
): Promise<null> {
  return apiService({
    api: updateFinanceNote(id, params),
    mock: mockUpdateFinanceNote(id, params),
  });
}

export function fetchFinanceNotesService(): Promise<
  SectionDataWithTotal<FinanceNote>
> {
  return apiService({
    api: fetchFinanceNotes(),
    mock: mockRequest(getFinancesNoteSectionsMock()),
  });
}

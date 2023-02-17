import {
  CreateFinanceNoteParams,
  UpdateFinanceNoteParams,
} from '@/shared/services/api/finances/types';
import {FinanceNote} from '@/shared/types';
import api from '../api';

export async function getFinancesNotesRequest(): Promise<FinanceNote[]> {
  const response = await api.get('/finances-notes');

  return response.data;
}

export async function createFinanceNoteRequest(
  params: CreateFinanceNoteParams,
): Promise<FinanceNote> {
  const response = await api.post('/finances-notes', params);

  return response.data;
}

export async function updateFinanceNoteRequest({
  id,
  ...params
}: UpdateFinanceNoteParams): Promise<FinanceNote> {
  const response = await api.patch(`/finances-notes/${id}`, params);

  return response.data;
}

export async function deleteFinanceNoteRequest(id: number): Promise<void> {
  await api.delete(`/finances-notes/${id}`);
}

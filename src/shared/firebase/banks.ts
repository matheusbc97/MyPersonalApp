import {CreateBankParams} from '@/shared/services/api/BanksService/types';
import firestore from '@react-native-firebase/firestore';
import {Bank} from '../types';
import {getBanksSections} from '../utils/getBanksSections';

const userId = 'U98XZMw9DLQq8oyQXBtf';

const banksCollection = firestore().collection(`users/${userId}/banks`);

export async function fetchBanks() {
  const querySnapshot = await banksCollection.get();
  const banks = querySnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Bank),
  );

  return getBanksSections(banks);
}

export async function createBank(params: CreateBankParams) {
  await banksCollection.add(params);
}

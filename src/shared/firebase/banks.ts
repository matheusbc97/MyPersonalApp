import {CreateBankParams} from '@/shared/services/api/BanksService/types';
import firestore from '@react-native-firebase/firestore';
import {Bank, SectionData} from '../types';

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

  const personalBanks = banks.filter(bank => bank.type === 'personal');
  const pjBanks = banks.filter(bank => bank.type === 'pj');

  const sections: SectionData<Bank> = [];

  if (personalBanks.length > 0) {
    sections.push({
      title: 'Pessoal',
      data: personalBanks,
    });
  }

  if (pjBanks.length > 0) {
    sections.push({
      title: 'PJ',
      data: pjBanks,
    });
  }

  return sections;
}

export async function createBank(params: CreateBankParams) {
  await banksCollection.add(params);
}

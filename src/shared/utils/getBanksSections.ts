import {BankTypeEnum} from '../enums';
import {Bank, SectionData} from '../types';

export function getBanksSections(banks: Bank[]) {
  const personalBanks = banks.filter(
    bank => bank.type === BankTypeEnum.PERSONAL,
  );
  const pjBanks = banks.filter(bank => bank.type === BankTypeEnum.PJ);

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

import {SectionData, Bank} from '@/shared/types';

export const banksMock: Bank[] = [
  {
    id: 'nubank',
    name: 'NuBank',
    type: 'personal',
  },
  {
    id: ',.,.,.,,.',
    name: 'Bs2',
    type: 'pj',
  },
];

export const getBanksSectionsMock = () => {
  const sections: SectionData<Bank> = [];

  const pjSections = banksMock.filter(bank => bank.type === 'pj');
  const personalSections = banksMock.filter(bank => bank.type === 'personal');

  sections.push({
    title: 'Pessoal',
    data: personalSections,
  });

  sections.push({
    title: 'PJ',
    data: pjSections,
  });

  return sections;
};

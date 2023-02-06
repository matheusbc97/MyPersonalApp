export interface Bank {
  name: string;
  id: string;
  type: BankType;
}

export type BankType = 'personal' | 'pj';

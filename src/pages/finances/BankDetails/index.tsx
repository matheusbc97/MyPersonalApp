import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';

import {
  ScreenWrapper,
  SubHeader,
  CreditCardGridItem,
  AccountGridItem,
  Grid,
  CreateCreditCardGridItem,
  CreateAccountGridItem,
} from '@/shared/components';
import {Bank, ScreenProps} from '@/shared/types';
import TitleWithSeparator from '@/shared/components/section-headers/TitleWithSeparatorSectionHeader';
import {useFetchBankAccounts, useFetchCreditCardsOfBank} from '@/shared/hooks';

export interface BankDetailsPageParams {
  bank: Bank;
}

function BankDetailsPage({route, navigation}: ScreenProps<'BankDetails'>) {
  const bank = route.params.bank;

  const {
    bankAccounts,
    getBankAccounts,
    hasError: fetchBankError,
    isLoading: fetchBankLoading,
  } = useFetchBankAccounts();

  const {
    creditCards,
    fetchCreditCards,
    fetchCreditCardsError,
    fetchCreditCardsLoading,
  } = useFetchCreditCardsOfBank();

  useEffect(() => {
    getBankAccounts(bank.id);
    fetchCreditCards(bank.id);
  }, [getBankAccounts, bank.id, fetchCreditCards]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <SubHeader title={route.params.bank.name} iconName="university" />
        <View style={{marginVertical: 5}}>
          <TitleWithSeparator style={{marginHorizontal: 5}} title="Cartões" />
          <Grid
            hasError={fetchCreditCardsError}
            isLoading={fetchCreditCardsLoading}
            emptyGridText="Nenhum Cartão Encontrado"
            firstItem={
              <CreateCreditCardGridItem
                onPress={() =>
                  navigation.navigate('CreateCreditCardForm', {bank})
                }
              />
            }
            renderItem={creditCard => (
              <CreditCardGridItem creditCard={creditCard} />
            )}
            items={creditCards}
          />
        </View>

        <View style={{marginTop: 20, marginBottom: 5}}>
          <TitleWithSeparator style={{marginHorizontal: 5}} title="Contas" />
          <Grid
            hasError={fetchBankError}
            isLoading={fetchBankLoading}
            emptyGridText="Nenhuma conta encontrada"
            firstItem={
              <CreateAccountGridItem
                onPress={() => navigation.navigate('CreateBankAccountForm')}
              />
            }
            renderItem={bankAccount => (
              <AccountGridItem account={bankAccount} />
            )}
            items={bankAccounts}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

export default BankDetailsPage;

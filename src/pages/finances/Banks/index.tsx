import React, {useEffect} from 'react';
import {
  Card,
  CreateFab,
  Row,
  ScreenWrapper,
  SectionListWithFetchIndicator,
  Text,
  TitleWithSeparatorSectionHeader,
} from '@/shared/components';
import {StackParams} from '@/navigation';
import {NavigationProp} from '@react-navigation/native';

import {useFetchBanks} from '@/shared/hooks';

interface Props {
  navigation: NavigationProp<StackParams, 'FinancesHome'>;
}

function Banks({navigation}: Props) {
  const {banks, getBanks, hasError, isLoading} = useFetchBanks();

  useEffect(() => {
    getBanks();
  }, [getBanks]);

  return (
    <ScreenWrapper>
      <SectionListWithFetchIndicator
        style={{margin: 5}}
        emptyListText="Nenhum Banco Encontrado"
        hasError={hasError}
        isLoading={isLoading}
        sections={banks}
        keyExtractor={bank => bank.id}
        onRefresh={getBanks}
        renderSectionHeader={({section: {title}}) => (
          <TitleWithSeparatorSectionHeader title={title} />
        )}
        renderItem={({item: bank}) => (
          <Card
            style={{marginVertical: 5}}
            onPress={() => navigation.navigate('BankDetails', {bank})}>
            <Text type="title">{bank.name}</Text>
          </Card>
        )}
      />
      <Row flexEnd>
        <CreateFab
          onPress={() =>
            navigation.navigate('CreateBankForm', {onBankCreated: getBanks})
          }
          style={{marginHorizontal: 5}}
        />
      </Row>
    </ScreenWrapper>
  );
}

export default Banks;

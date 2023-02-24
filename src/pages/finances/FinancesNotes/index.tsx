import React, {useEffect} from 'react';

import {
  ScreenWrapper,
  SectionListWithFetchIndicator,
  FinanceNoteListItem,
  CreateFab,
  Row,
  TitleWithTotalSectionHeader,
} from '@/shared/components';
import {useFetchFinancesNotes} from '@/shared/hooks';
import {ScreenProps} from '@/shared/types';

function FinancesNotes({navigation}: ScreenProps<'FinancesNotes'>) {
  const {financesNotes, getFinancesNotes, hasError, isLoading} =
    useFetchFinancesNotes();

  useEffect(() => {
    getFinancesNotes();
  }, [getFinancesNotes]);

  return (
    <ScreenWrapper>
      <SectionListWithFetchIndicator
        style={{marginVertical: 5}}
        emptyListText="Nenhuma Nota Encontrada"
        hasError={hasError}
        isLoading={isLoading}
        keyExtractor={(financeNote, index) => index.toString()}
        sections={financesNotes}
        onRefresh={getFinancesNotes}
        renderItem={({item: financeNote}) => (
          <FinanceNoteListItem
            onPress={() =>
              navigation.navigate('UpdateFinanceNoteForm', {
                financeNote,
                onFinanceNoteUpdated: getFinancesNotes,
              })
            }
            financeNote={financeNote}
          />
        )}
        renderSectionHeader={({section: {title, total}}) => (
          <TitleWithTotalSectionHeader title={title} total={total} />
        )}
      />
      <Row flexEnd>
        <CreateFab
          onPress={() =>
            navigation.navigate('CreateFinanceNoteForm', {
              onFinanceNoteCreated: getFinancesNotes,
            })
          }
        />
      </Row>
    </ScreenWrapper>
  );
}

export default FinancesNotes;

import React from 'react';

import {
  Card,
  DeleteIconButton,
  EditFab,
  Row,
  ScreenWrapper,
  Text,
  TitleWithSeparatorSectionHeader,
} from '@/shared/components';
import {View} from 'react-native';
import {ScreenProps} from '@/shared/types';

function LinkListItem() {
  return (
    <Card style={{marginVertical: 5}}>
      <Text>Trip Advisor</Text>
    </Card>
  );
}

interface CreateLinkListItemProps {
  onPress: () => void;
}

function CreateLinkListItem({onPress}: CreateLinkListItemProps) {
  return (
    <Card style={{marginVertical: 5, alignItems: 'center'}} onPress={onPress}>
      <Text>Criar Novo Link</Text>
    </Card>
  );
}

function TouristSpotListItem() {
  return (
    <Card style={{marginVertical: 5}}>
      <Text>Crumlin Road Gaol</Text>
      <Text type="label" textAlign="right">
        Local Histórico
      </Text>
    </Card>
  );
}

function CreateTouristSpotListItem() {
  return (
    <Card style={{marginVertical: 5, alignItems: 'center'}}>
      <Text>Criar Ponto Turístico</Text>
    </Card>
  );
}

interface InfoWithLabelProps {
  label: string;
  text: string;
}

function InfoWithLabel({label, text}: InfoWithLabelProps) {
  return (
    <View style={{marginVertical: 3}}>
      <Text type="label">{label}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default function CityDetails({navigation}: ScreenProps<'CityDetails'>) {
  return (
    <ScreenWrapper>
      <View style={{marginTop: 5}}>
        <TitleWithSeparatorSectionHeader title="Detalhes" />

        <InfoWithLabel label="País" text="Irlanda do Norte" />

        <InfoWithLabel
          label="Descrição"
          text="Capital da Irlanda do Norte, segunda maior cidade da Irlanda"
        />
      </View>

      <View style={{marginVertical: 5}}>
        <TitleWithSeparatorSectionHeader title="Links" />
        <LinkListItem />
        <CreateLinkListItem
          onPress={() => navigation.navigate('CreateNewCityLink')}
        />
      </View>

      <View style={{marginVertical: 5, flex: 1}}>
        <TitleWithSeparatorSectionHeader title="Pontos Turísticos" />
        <TouristSpotListItem />
        <CreateTouristSpotListItem />
      </View>

      <Row spaceBetween>
        <DeleteIconButton />
        <EditFab onPress={() => {}} />
      </Row>
    </ScreenWrapper>
  );
}

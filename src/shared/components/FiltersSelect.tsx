import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import theme from '@/assets/theme';

import Text from './Text';
import Row from './containers/Row';
import Chip from './Chip';
import Button from './buttons/Button';

interface Filter {
  label: string;
  value: string;
}

interface FilterListProps {
  style?: StyleProp<ViewStyle>;
  filters: Filter[];
  onPress: () => void;
}

const FilterList = ({filters, style, onPress}: FilterListProps) => {
  return (
    <Button onPress={onPress} style={style}>
      <Row style={{marginLeft: 5}}>
        <Text>Filtros</Text>
        <MaterialIcon name="keyboard-arrow-down" color={theme.text} size={22} />
      </Row>
      <Row
        style={{
          flexWrap: 'wrap',
        }}>
        {filters.map(filter => (
          <Chip key={filter.value} label={filter.label} />
        ))}
      </Row>
    </Button>
  );
};

export default FilterList;

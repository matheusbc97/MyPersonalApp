import {StyleProp, ViewStyle} from 'react-native';

export interface RadioListProps<T> {
  value: T | null;
  onChangeValue: (value: T) => void;
  style?: StyleProp<ViewStyle>;
}

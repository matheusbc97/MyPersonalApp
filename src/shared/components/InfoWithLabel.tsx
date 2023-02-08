import {StyleProp, View, ViewStyle} from 'react-native';
import Text from './Text';

interface InfoWithLabelProps {
  label: string;
  text: string;
  style?: StyleProp<ViewStyle>;
}

function InfoWithLabel({label, text, style}: InfoWithLabelProps) {
  return (
    <View style={[{marginVertical: 3}, style]}>
      <Text type="label">{label}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

export default InfoWithLabel;

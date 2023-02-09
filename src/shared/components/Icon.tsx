import theme from '@/assets/theme';
import {StyleProp, TextStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

interface IconProps {
  name: string;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
}

function Icon(props: IconProps) {
  return <FontAwesome5Icon {...props} color={theme.text} />;
}

export default Icon;

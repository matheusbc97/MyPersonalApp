import theme from '@/assets/theme';
import {StyleProp, TextStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export type IconFontFamily = 'FontAwesome5' | 'FontAwesome' | 'MaterialIcons';

interface IconProps {
  name: string;
  fontFamily?: IconFontFamily;
  style?: StyleProp<TextStyle>;
  size?: number;
  color?: string;
}

function Icon({fontFamily, ...props}: IconProps) {
  if (fontFamily === 'MaterialIcons') {
    return <MaterialIcon {...props} color={theme.text} />;
  }

  if (fontFamily === 'FontAwesome') {
    return <FontAwesomeIcon {...props} color={theme.text} />;
  }

  return <FontAwesome5Icon {...props} color={theme.text} />;
}

export default Icon;

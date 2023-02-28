import {StyleSheet, View} from 'react-native';

interface DimBackgroundProps {
  isDim: boolean;
}

function DimBackground({isDim}: DimBackgroundProps) {
  if (!isDim) {
    return null;
  }

  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {backgroundColor: '#000', opacity: 0.5, zIndex: 0},
      ]}
    />
  );
}

export default DimBackground;

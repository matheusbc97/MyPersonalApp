import {useCallback, useLayoutEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

import theme from '@/assets/theme';
import {shadow} from '@/shared/styles';

import Fab from '../Fab';
import CreateFab from '../filled/fabs/CreateFab';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {IconFontFamily} from '../../Icon';

export interface FabAction {
  iconName: string;
  onPress: () => void;
  label: string;
  iconFamily?: IconFontFamily;
}

interface FabGroupProps {
  fabActions: FabAction[];
  setFabActions: (fabActions: FabAction[]) => void;
}

function FabGroup({fabActions, setFabActions}: FabGroupProps) {
  const insets = useSafeAreaInsets();
  const animationRef = useRef(new Animated.Value(0));

  const animatedBottom = animationRef.current.interpolate({
    inputRange: [1, 2],
    outputRange: [40, 0],
  });

  const opacity = animationRef.current.interpolate({
    inputRange: [1, 2],
    outputRange: [0, 1],
  });

  const backgroundOpacity = animationRef.current.interpolate({
    inputRange: [1, 2],
    outputRange: [0, 0.5],
  });

  const mainFabAnimation = useRef(new Animated.Value(1));

  const showAnimation = useCallback(() => {
    animationRef.current.setValue(1);

    Animated.timing(animationRef.current, {
      toValue: 2,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const hideAnimation = useCallback(() => {
    Animated.timing(animationRef.current, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setFabActions([]));
  }, [setFabActions]);

  useLayoutEffect(() => {
    if (fabActions.length) {
      showAnimation();
    }
  }, [showAnimation, fabActions.length]);

  if (!fabActions.length) {
    return null;
  }

  return (
    <>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: '#000', opacity: backgroundOpacity},
        ]}
      />

      <Animated.View
        style={[
          styles.container,
          {opacity: mainFabAnimation.current, bottom: insets.bottom + 15},
        ]}>
        {fabActions.map(fabAction => (
          <Animated.View
            style={{
              marginBottom: 10,
              marginRight: 5,
              transform: [{translateY: animatedBottom}],
              opacity,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Animated.Text
              style={{
                color: theme.text,
                marginRight: 10,
                backgroundColor: theme.primary,
                paddingVertical: 5,
                paddingHorizontal: 10,
                ...shadow,
              }}>
              {fabAction.label}
            </Animated.Text>
            <Fab
              size={46}
              onPress={fabAction.onPress}
              iconName={fabAction.iconName}
              iconFamily={fabAction.iconFamily}
            />
          </Animated.View>
        ))}

        <CreateFab onPress={hideAnimation} />
      </Animated.View>
    </>
  );
}

export default FabGroup;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginRight: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

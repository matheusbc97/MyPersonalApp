import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useRef,
} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

import theme from '@/assets/theme';
import {FabGroupContext} from '@/shared/contexts/FabGroupContext';
import {shadow} from '@/shared/styles';

import Fab from '../Fab';
import CreateFab from '../filled/fabs/CreateFab';

export interface FabAction {
  iconName: string;
  onPress: () => void;
  label: string;
}

interface FabGroupProps {
  fabActions: FabAction[];
}

export interface FabGroupHandles {
  remove: () => void;
}

function FabGroup(
  {fabActions}: FabGroupProps,
  ref: ForwardedRef<FabGroupHandles>,
) {
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

  useImperativeHandle(ref, () => ({
    remove: () => {
      //mainFabAnimation.current.setValue(0);
    },
  }));

  const {setIsDimmed, isDimmed} = useContext(FabGroupContext);

  const changeDimmedState = useCallback(() => {
    const newIsDimmedState = !isDimmed;

    if (newIsDimmedState) {
      animationRef.current.setValue(1);

      setIsDimmed(newIsDimmedState);

      Animated.timing(animationRef.current, {
        toValue: 2,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animationRef.current, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setIsDimmed(newIsDimmedState));
    }
  }, [setIsDimmed, isDimmed]);

  if (!fabActions.length) {
    return null;
  }

  return (
    <>
      {isDimmed && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: '#000', opacity: backgroundOpacity},
          ]}
        />
      )}
      <Animated.View
        style={[styles.container, {opacity: mainFabAnimation.current}]}>
        {isDimmed &&
          fabActions.map(fabAction => (
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
                size={40}
                onPress={fabAction.onPress}
                iconName={fabAction.iconName}
              />
            </Animated.View>
          ))}

        <CreateFab onPress={changeDimmedState} />
      </Animated.View>
    </>
  );
}

export default forwardRef(FabGroup);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginRight: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

import {useCallback, useContext, useRef} from 'react';
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

function FabGroup({fabActions}: FabGroupProps) {
  const animationRef = useRef(new Animated.Value(0));

  const {setIsDimmed, isDimmed} = useContext(FabGroupContext);

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
      {true && (
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {backgroundColor: '#000', opacity: backgroundOpacity, zIndex: 500},
          ]}
        />
      )}
      <View style={styles.container}>
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
      </View>
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

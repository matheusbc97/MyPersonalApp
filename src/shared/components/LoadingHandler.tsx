import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  DeviceEventEmitter,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {useBackHandler} from '@react-native-community/hooks';

import theme from '@/assets/theme';

export const loaderHandler = {
  hideLoader() {
    DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: false});
  },
  showLoader() {
    DeviceEventEmitter.emit('changeLoadingEffect', {isVisible: true});
  },
};

const LoadingHandler = () => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<any>(null);

  useBackHandler(() => isVisible);

  useEffect(() => {
    const emitter = DeviceEventEmitter.addListener(
      'changeLoadingEffect',
      data => {
        if (data.isVisible) {
          timeoutRef.current = setTimeout(() => {
            setIsVisible(data.isVisible);
          }, 150);
        } else {
          clearTimeout(timeoutRef.current);
          setIsVisible(data.isVisible);
        }
      },
    );

    return () => {
      emitter.remove();
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <ActivityIndicator
            size={40}
            color={theme.accent}
            style={styles.activityIndicator}
          />
          <Text style={styles.text}>Carregando...</Text>
        </View>
      </View>
    </View>
  );
};

export default LoadingHandler;

const styles = StyleSheet.create({
  container: {position: 'absolute', width: '100%', height: '100%'},
  background: {flex: 1, backgroundColor: 'black', opacity: 0.5},
  contentWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  content: {
    backgroundColor: 'white',
    width: 300,
    height: 100,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIndicator: {paddingHorizontal: 30},
  text: {fontSize: 18},
});

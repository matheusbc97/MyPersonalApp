import React, {
  useEffect,
  useState,
  useMemo,
  ForwardRefRenderFunction,
  useImperativeHandle,
  forwardRef,
} from 'react';
import {Modal as RNModal, Animated, StyleProp, ViewStyle} from 'react-native';

interface ModalProps {
  style?: StyleProp<ViewStyle>;
  children?: any;
  onModalClosedCallback?: () => void;
}

const hideAnimation = (value: Animated.Value, callback: () => void) => {
  Animated.timing(value, {
    useNativeDriver: false,
    toValue: 0,
    duration: 400,
  }).start(callback);
};

const showAnimation = (value: Animated.Value) => {
  Animated.timing(value, {
    useNativeDriver: false,
    toValue: 1,
    duration: 450,
  }).start();
};

export interface ModalHandles {
  open: () => void;
  close: () => void;
}

const Modal: ForwardRefRenderFunction<ModalHandles, ModalProps> = (
  {style, children, onModalClosedCallback},
  ref,
) => {
  const [visible, setVisible] = useState(false);

  const position = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (visible) {
      showAnimation(position);
    }
  }, [visible, position]);

  useImperativeHandle(ref, () => ({
    open: () => {
      setVisible(true);
    },
    close: () => {
      hideAnimation(position, () => {
        setVisible(false);
        onModalClosedCallback?.();
      });
    },
  }));

  const top = position.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '0%'],
  });

  const backgroundOpacity = position.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  return (
    <RNModal transparent visible={visible}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: backgroundOpacity,
        }}
      />
      <Animated.View
        style={[
          {
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top,
          },
          style,
        ]}>
        {children}
      </Animated.View>
    </RNModal>
  );
};

export default forwardRef(Modal);

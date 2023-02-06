import theme from '@/assets/theme';
import React, {
  useMemo,
  useCallback,
  useState,
  useRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  Animated,
  TextStyle,
  StyleProp,
  View,
  Platform,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Text} from '..';

import Button from '../buttons/Button';

const AnimatedMaterialIcon = Animated.createAnimatedComponent(MaterialIcon);

const AnimatedFontAwesomeIcon =
  Animated.createAnimatedComponent(FontAwesomeIcon);

export interface TextInputBaseHandles {
  setText: (text: string) => void;
  focus: () => void;
}

export interface TextInputBaseProps extends RNTextInputProps {
  label?: string;
  inputStyle?: StyleProp<TextStyle>;
  error?: string;
  button?: boolean;
  select?: boolean;
  flex?: number;
  onPress?(): void;
  mask?(value: string, oldValue: string): string;
}

const TextInput = (
  {
    label = '',
    onChangeText,
    onBlur,
    onFocus,
    style,
    defaultValue,
    error,
    button = false,
    onPress,
    mask,
    value,
    select = false,
    flex,
    ...rest
  }: TextInputBaseProps,
  ref: any,
) => {
  const [labelLeftOffset, setLabelLeftOffset] = useState(0);
  const inputRef = useRef<RNTextInput>(null);

  const labelIsOnTop = useMemo(
    () => new Animated.Value(defaultValue ? 1 : 0),
    [defaultValue],
  );

  const isFocused = useMemo(() => new Animated.Value(1), []);

  const textRef = useRef<string | null>(value ?? null);

  const labelTop = labelIsOnTop.interpolate({
    inputRange: [0, 1],
    outputRange: [7, -10],
  });

  const labelLeft = labelIsOnTop.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -labelLeftOffset],
  });

  const borderColor = isFocused.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['#57d491', theme.text, '#d50000'],
  });

  const scale = labelIsOnTop.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const animation = useCallback(
    (toTop: boolean) =>
      Animated.timing(labelIsOnTop, {
        toValue: toTop ? 1 : 0,
        duration: 120,
        useNativeDriver: false,
      }).start(),
    [labelIsOnTop],
  );

  useImperativeHandle(ref, () => ({
    setText(text: string) {
      animation(true);
      const maskedText = applyMask(text);
      inputRef.current?.setNativeProps({text: maskedText});
      onChangeText?.(maskedText);
    },
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  const borderColorAnimation = useCallback(
    (toValue: number) =>
      Animated.timing(isFocused, {
        toValue,
        duration: 120,
        useNativeDriver: false,
      }).start(),
    [isFocused],
  );

  const applyMask = useCallback(
    (text: string | undefined) => {
      if (mask && text) {
        const maskedText = mask(text, value ?? '');

        const nativeProps = {
          text: maskedText,
        };

        inputRef.current?.setNativeProps(nativeProps);

        animation(true);

        return maskedText;
      }

      return text ?? '';
    },
    [inputRef, mask, value, animation],
  );

  useEffect(() => {
    if (value) {
      textRef.current = value;

      animation(true);
    }
  }, [value, textRef, animation]);

  useEffect(() => {
    if (labelLeftOffset !== 0) {
      error ? borderColorAnimation(2) : borderColorAnimation(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, borderColorAnimation]);

  const buttonEnabled = button || select;

  return (
    <View style={[{flex}, {height: 65}, style]}>
      <Button
        disabled={!buttonEnabled}
        style={[{width: '100%'}]}
        onPress={onPress}>
        <Animated.View style={[styles.container, {borderColor: borderColor}]}>
          <Animated.View
            style={[
              styles.textContainer,
              {
                top: labelTop,
                left: labelLeft,
              },
            ]}>
            <Animated.Text
              onLayout={(event: any) => {
                var {width} = event.nativeEvent.layout;
                if (labelLeftOffset === 0) {
                  setLabelLeftOffset(width * 0.1);
                }
              }}
              style={[
                styles.text,
                {
                  transform: [{scale}],
                  color: borderColor,
                },
              ]}>
              {label}
            </Animated.Text>
          </Animated.View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <RNTextInput
              value={value}
              pointerEvents={buttonEnabled ? 'none' : 'auto'}
              editable={!buttonEnabled}
              defaultValue={defaultValue}
              ref={inputRef}
              style={[styles.input]}
              returnKeyType="next"
              onFocus={e => {
                if (!textRef.current) {
                  animation(true);
                }
                !error && borderColorAnimation(0);

                onFocus && onFocus(e);
              }}
              onBlur={e => {
                !textRef.current && animation(false);
                !error && borderColorAnimation(1);

                onBlur?.(e);
              }}
              onChangeText={text => {
                const maskedText = applyMask(text);

                textRef.current = maskedText;

                onChangeText?.(maskedText);
              }}
              {...rest}
            />
            {select && (
              <AnimatedMaterialIcon
                name="keyboard-arrow-down"
                size={30}
                style={{color: borderColor}}
              />
            )}
            {button && (
              <AnimatedFontAwesomeIcon
                name="search"
                size={20}
                style={{paddingHorizontal: 15, color: borderColor}}
              />
            )}
          </View>
        </Animated.View>
      </Button>
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default forwardRef(TextInput);

const marginHorizontal = 10;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.5,
    marginTop: 12,
    marginBottom: 2,
    marginHorizontal,
  },
  input: {
    paddingVertical: Platform.OS === 'ios' ? 10 : 2,
    flexGrow: 1,
    color: theme.text,
    paddingHorizontal: 0,
  },
  text: {
    flexShrink: 1,
    fontSize: 14,
  },
  textContainer: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 0,
  },
  error: {
    marginHorizontal,
    color: 'red',
    fontSize: 12,
  },
});

import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
  useCallback,
  useLayoutEffect,
} from 'react';
import {useNavigation} from '@react-navigation/native';

import {TextInput} from '@/shared/components';
import {Group} from '@/shared/types';
import {HandleFormInputPropsReturn} from '@/shared/hooks/useForm';

import {TextInputHandles} from './TextInput';

interface Props {
  flex?: number;
  onGroupSelect?: (group: Group) => void;
  error?: string;
  value?: Group;
  formProps?: HandleFormInputPropsReturn;
}

interface GroupInputHandles {
  focus: () => void;
}

const GroupInput = (
  {flex, onGroupSelect, error, value, formProps}: Props,
  ref: ForwardedRef<GroupInputHandles>,
) => {
  const navigation = useNavigation<any>();
  const inputRef = useRef<TextInputHandles>(null);

  const navigateToFinanceGroup = useCallback(() => {
    navigation.navigate('FinancesGroups', {
      onSelectGroup: (group: any) => {
        inputRef.current?.setText(group.title);
        onGroupSelect?.(group);
        formProps?.handleValueChange(group);
      },
    });
  }, [navigation, inputRef, onGroupSelect, formProps]);

  useImperativeHandle(
    ref,
    () => ({
      focus: () => {
        navigateToFinanceGroup();
      },
    }),
    [navigateToFinanceGroup],
  );

  useLayoutEffect(() => {
    formProps?.handleCreateRef(ref);
    formProps?.value && inputRef.current?.setText(formProps.value.title);
  }, [ref, formProps]);

  useEffect(() => {
    value && inputRef.current?.setText(value.title);
  }, [value]);

  return (
    <TextInput
      flex={flex}
      ref={inputRef}
      error={error}
      button
      label="Grupo"
      onPress={navigateToFinanceGroup}
    />
  );
};

export default forwardRef(GroupInput);

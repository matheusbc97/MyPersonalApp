import React, {
  useEffect,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import {FlatList, View} from 'react-native';

import Text from '../Text';
import Modal, {ModalHandles} from '../modals/Modal';
import Separator from '../Separator';
import Button from '../buttons/Button';

import TextInput, {TextInputHandles} from './TextInput';

export interface SelectInputBaseHandles {
  focus: () => void;
}

export interface SelectInputBaseProps<T> {
  onSelectItem?: (item: T) => void;
  label: string;
  itemLabelSelector: (item: T) => string;
  inputLabelSelector: (item: T) => string;
  items: T[];
  keyExtractor: (item: T, index: number) => string;
  flex?: number;
  value?: T;
  error?: string;
  onModalClosedCallback?: () => void;
}

const SelectInputBase = <T,>(
  {
    onSelectItem,
    items,
    itemLabelSelector,
    keyExtractor,
    inputLabelSelector,
    flex,
    label,
    value,
    error,
    onModalClosedCallback,
  }: SelectInputBaseProps<T>,
  ref: any,
) => {
  const modalRef = useRef<ModalHandles>(null);
  const inputRef = useRef<TextInputHandles>(null);
  const [selectedValue, setSelectedValue] = useState<T | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      modalRef.current?.open();
    },
  }));

  useEffect(() => {
    value && setSelectedValue(value);
  }, [value]);

  return (
    <>
      <TextInput
        ref={inputRef}
        select
        value={selectedValue ? inputLabelSelector(selectedValue) : undefined}
        label={label}
        onPress={() => {
          modalRef.current?.open();
        }}
        flex={flex}
        error={error}
      />
      <Modal
        onModalClosedCallback={onModalClosedCallback}
        ref={modalRef}
        style={{justifyContent: 'flex-end', paddingVertical: 50}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 10,
            paddingVertical: 10,
          }}>
          <FlatList
            keyExtractor={keyExtractor}
            data={items}
            renderItem={({item}) => (
              <Button
                style={{justifyContent: 'center', height: 40}}
                onPress={() => {
                  onSelectItem?.(item);
                  inputRef.current?.setText(inputLabelSelector(item));
                  modalRef.current?.close();
                }}>
                <Text type="secondary" style={{textAlign: 'center'}}>
                  {itemLabelSelector(item)}
                </Text>
              </Button>
            )}
            ItemSeparatorComponent={Separator}
          />
        </View>
      </Modal>
    </>
  );
};

export default forwardRef(SelectInputBase) as <T>(
  props: SelectInputBaseProps<T> & {ref?: React.ForwardedRef<any>},
) => ReturnType<typeof SelectInputBase>;

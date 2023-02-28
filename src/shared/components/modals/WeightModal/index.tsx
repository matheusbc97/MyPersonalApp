import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import SaveContainedButton from '../../buttons/filled/contained-buttons/SaveContainedButton';
import CancelTextButton from '../../buttons/filled/text-buttons/CancelTextButton';
import Column from '../../containers/Column';
import Row from '../../containers/Row';

import Text from '../../Text';

import Modal, {ModalHandles} from '../Modal';
import WeightValue from './components/WeightValue';

export interface WeightModalHandles {
  open: (value?: string) => void;
  close: () => void;
}

interface WeightModalProps {
  onSavePress: (weight: number) => void;
}

function WeightModal(
  {onSavePress}: WeightModalProps,
  ref: ForwardedRef<WeightModalHandles>,
) {
  const modalRef = useRef<ModalHandles>(null);

  const [values, setValues] = useState<number[]>([0, 0, 0, 0]);

  const handleChangeValue = (index: number, value: number) => {
    setValues(prevValues => {
      const newValue = [...prevValues];
      newValue[index] = value;
      return newValue;
    });
  };

  const handleClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: text => {
        let newValue = [0, 0, 0, 0];

        if (text) {
          newValue = text
            ?.padStart(4, '0')
            .split('')
            ?.map(value => Number(value));
        }

        setValues(newValue);
        modalRef.current?.open();
      },
      close: handleClose,
    }),
    [handleClose],
  );

  return (
    <Modal ref={modalRef}>
      <Column p={20} width="80%" background>
        <Row>
          {values.map((value, index) => (
            <WeightValue
              key={index}
              value={value}
              onChangeValue={newValue => handleChangeValue(index, newValue)}
            />
          ))}
          <Text type="title-extra-big">g</Text>
        </Row>
        <Row width="100%" justifyEnd mt={10}>
          <CancelTextButton onPress={handleClose} />
          <SaveContainedButton
            onPress={() => onSavePress(Number(values.join('')))}
          />
        </Row>
      </Column>
    </Modal>
  );
}

export default forwardRef(WeightModal);

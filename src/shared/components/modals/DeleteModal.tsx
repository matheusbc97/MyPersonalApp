import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import ContainedButton from '../buttons/ContainedButton';
import CancelTextButton from '../buttons/filled/text-buttons/CancelTextButton';
import Column from '../containers/Column';
import Row from '../containers/Row';
import Text from '../Text';

import Modal, {ModalHandles} from './Modal';

export interface DeleteModalHandles {
  open: (text: string) => void;
  close: () => void;
}

interface DeleteModalProps {
  onConfirmPress: () => void;
}

function DeleteModal(
  {onConfirmPress}: DeleteModalProps,
  ref: ForwardedRef<DeleteModalHandles>,
) {
  const modalRef = useRef<ModalHandles>(null);
  const [modalText, setModalText] = useState('');

  const handleClose = useCallback(() => {
    modalRef.current?.close();
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      open: (text: string) => {
        setModalText(text);
        modalRef.current?.open();
      },
      close: handleClose,
    }),
    [handleClose],
  );

  return (
    <Modal ref={modalRef}>
      <Column p={20} width="80%" background>
        <Text>
          Tem certeza que deseja deletar: <Text type="title">{modalText}</Text>?
        </Text>
        <Row mt={20} width="100%" justifyEnd>
          <CancelTextButton onPress={handleClose} />
          <ContainedButton text="Confimar" onPress={onConfirmPress} />
        </Row>
      </Column>
    </Modal>
  );
}

export default forwardRef(DeleteModal);

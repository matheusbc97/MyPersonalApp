import DeleteModal, {
  DeleteModalHandles,
} from '@/shared/components/modals/DeleteModal';
import React, {useRef} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import IconButton from './IconButton';

interface DeleteIconButtonWithDeleteModalProps {
  deleteText: string;
  onConfirmPress: () => void;
  style?: StyleProp<ViewStyle>;
  size?: number;
}

const DeleteIconButtonWithDeleteModal: React.FC<DeleteIconButtonWithDeleteModalProps> =
  ({onConfirmPress, deleteText, size, style}) => {
    const deleteModalRef = useRef<DeleteModalHandles>(null);

    return (
      <>
        <IconButton
          iconName="trash"
          onPress={() => deleteModalRef.current?.open(deleteText)}
          style={style}
          size={size}
        />
        <DeleteModal onConfirmPress={onConfirmPress} ref={deleteModalRef} />
      </>
    );
  };

export default DeleteIconButtonWithDeleteModal;

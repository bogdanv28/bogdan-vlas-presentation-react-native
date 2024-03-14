import { Modal } from 'native-base';
import React, { FC } from 'react';

type SimpleDialogProps = {
  title: string;
  details: string;
  isOpen: boolean;
  setIsOpen: (input: boolean) => void;
};

const SimpleDialog: FC<SimpleDialogProps> = ({ title, details, isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} safeAreaTop={true}>
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>{details}</Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default SimpleDialog;

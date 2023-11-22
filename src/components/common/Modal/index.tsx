import React from 'react';
import Modal from './modal.style';

const ModalWrapper = ({ children }: { children: React.ReactNode }) => (
  <Modal>{children}</Modal>
);

export default ModalWrapper;

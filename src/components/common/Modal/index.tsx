import React from 'react';
import Modal from './modal.style';

export default ({ children }: { children: React.ReactNode }) => (
  <Modal>{children}</Modal>
);

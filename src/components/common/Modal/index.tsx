import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from './modal.style';

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Modal>
      {children}
      <br />
      <button onClick={() => router.push('/')}>닫기</button>
    </Modal>
  );
};

export default ModalWrapper;

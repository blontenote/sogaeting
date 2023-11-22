'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { useEffect } from 'react';
import Modal from '~/components/common/Modal';

const PhotoModal = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  console.warn('modal router:', router);
  console.warn('modal pathname', pathname);
  console.warn('modal params:', params);

  return (
    <Modal>
      <div className="content">{params && params.id && params.id}</div>
    </Modal>
  );
};

export default PhotoModal;

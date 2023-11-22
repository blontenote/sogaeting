'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import Modal from '~/components/common/Modal';
export default () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  console.warn('router:', router);
  console.warn('pathname', pathname);
  console.warn('params:', params);
  return (
    <Modal>
      <div className="content">{params && params.id && params.id}</div>
    </Modal>
  );
};

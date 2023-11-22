'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useParams } from 'next/navigation';
import { defaultAction } from '~/store/recoil';
import Link from 'next/link';

const IndexPage = () => {
  const [action, setAction] = useRecoilState(defaultAction);
  const [id, setId] = useState<string>('');
  const a: IDefault = {
    test: 'test',
  };

  useEffect(() => {
    console.warn('-----recoil/action:', action);
  }, [action]);

  return (
    <div>
      <button onClick={() => setAction(!action)}>test recoil</button>

      <div>
        <input
          style={{ border: '1px solid #000', padding: '10px' }}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {id.length > 0 && <Link href={`/photo/${id}`}>go photo</Link>}
      </div>
    </div>
  );
};

export default IndexPage;

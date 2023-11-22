'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

export default ({ children }: { children: React.ReactNode }) => (
  <RecoilRoot>{children}</RecoilRoot>
);

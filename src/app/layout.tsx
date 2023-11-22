import RecoilWrapper from '~/components/common/RecoilWrapper';
import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const { children, modal } = props;
  console.warn('---props:', props.modal);
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilWrapper>
          {children}
          {modal && modal}
        </RecoilWrapper>
      </body>
    </html>
  );
}

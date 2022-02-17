import { ReactNode } from 'react';

import { Header } from '@components/Header';
import { PageTitle } from '@components/PageTitle';

import { Content } from './styles';

type PageLayoutProps = {
  pageTitle: string;
  children: ReactNode;
};

export function PageLayout({ pageTitle, children }: PageLayoutProps) {
  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <div>
        <Header />
        <Content>
          {children}
        </Content>
      </div>
    </>
  );
}

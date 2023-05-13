import React, { Fragment } from 'react';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Home } from '@/modules/Home';

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Fragment>{page}</Fragment>;
};

export default HomePage;

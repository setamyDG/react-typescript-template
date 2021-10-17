import React, { createRef, FC, useEffect, useState } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';
import Main from './main-layout.styled';

const MainLayout: FC = ({ children }) => {
  const headerRef = createRef<HTMLDivElement>();

  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Main headerHeight={headerHeight}>{children}</Main>
      <Footer />
    </>
  );
};

export default MainLayout;

import React from 'react';
import * as S  from "./styled"
import Header from "../header"

// import { Container } from './styles';

const Layout = ({children}) => {

  return (
  <S.WrapperLayout>
    <Header/>
    {children}
  </S.WrapperLayout>
  )};

export default Layout;
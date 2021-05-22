import React, { useContext, useState } from 'react';

import * as S from './style.js';


const Sort = ({title}) => {
    return <S.container> 
        <S.title> Added Date</S.title>
        <S.item title={title}>First To Last</S.item>
        <S.item title={title}  >Last To First</S.item>

        <S.title> Position Name</S.title>
        <S.item title={title}>A-Z</S.item>
        <S.item title={title}>Z-A</S.item>


        <S.title> Company Name</S.title>
        <S.item title={title}>A-Z</S.item>
        <S.item title={title}>Z-A</S.item>

    </S.container>
  };

export default Sort;

import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import { LikeButton } from './Like';
import './CardFavoriteQuestion.css'

const CardFavoriteQuestion = ({name, href, isQuea, nameQueComm, className, classText}) => {
  return (
  <Container className={`accList ${className}`}>
    <div className='textAcc'>
        <a className={`fontRubbik14  hrefAuto ${classText}`} href={href}>
          {name}
          </a>
      {!isQuea ? (
        <LikeButton />
      ) : (
      <div className={`changeAcc fontRubbik14 ${classText}`}> {nameQueComm}</div>
      )}
    </div>
    <hr className='hrAcc'></hr>
    </Container>
  );
};

export default CardFavoriteQuestion;
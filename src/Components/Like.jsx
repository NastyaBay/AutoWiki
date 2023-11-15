import React, { useState } from 'react';
import {Container} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import like from "/public/img/like.png";
import noLike from "/public/img/noLike.png";

const LikeButton = ({name, href, isQuea}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
  <Container className='accList'>
    <div className='textAcc'>
        <a className='fontRubbik14 hrefAuto' href={href}>
          {name}
          </a>
      {!isQuea ? (
      <div className='changeAcc' onClick={handleClick}>
        <Image src={isLiked ? noLike : like} className='imgLike' alt='like'></Image>
      </div>
      ) : (
      <div className='changeAcc fontRubbik14'>Ответов: 12000</div>
      )}
    </div>
    <hr className='hrAcc'></hr>
    </Container>
  );
};

export default LikeButton;
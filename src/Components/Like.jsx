import React, { useState } from 'react';
import {Image} from 'react-bootstrap';
import like from "/public/img/like.svg";
import noLike from "/public/img/noLike.svg";
import "./Like.css"

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className='changeAcc' onClick={handleClick}>
        <Image src={isLiked ? noLike : like} className='imgLike' alt='like'></Image>
    </div>
  );
};
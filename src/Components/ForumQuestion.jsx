import React from 'react'
import './ForumQuestion.css'
import { Button, Container, Image } from 'react-bootstrap'
import avatar from "/public/img/avatar.png";
import { LikeButton } from './like';
import imgForum from "/public/img/imgAutoArticle1.jpg";

const dictionaries  = {
    text: {
      date: '30.05.2023',
      autor: 'Имя автора',
      name: 'Название темы',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,
      img: imgForum,
    }
  };

export const ForumQuestion = ({setAnswer}) => {
    const dict = dictionaries['text'];

    const answer = () => {
       setAnswer(true)
      };
      
    return(
    <>
    <Container className='forumQuestion'>
        <Container className='navbForum'>
            <Image src={avatar} className="avatarForum" roundedCircle />
            <Container className='navForum'>
                <div className='row1'>
                <div className='dateForum fontRubbik14'>{dict.date}</div>
                <div className='autorForum fontRubbik14'>{dict.autor}</div>
                </div>
                <div className='row2'>
                <div className='nameForum fontRubbik18'>{dict.name}</div>
                <LikeButton />
                </div>
            </Container>
            <Button className='backButForum fontRubbik14'>Назад</Button>
        </Container>
        <p className='textQuestForum fontRubbik14'>{dict.text}</p>     
        <Image src={dict.img} className='imgForum'></Image>
        <div className='forBtn'>
        <Button className='fontRubbik14 answerForum' onClick={answer}>Ответить</Button>
        </div>
    </Container>
</>
)
}
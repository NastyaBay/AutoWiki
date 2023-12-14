import React from 'react'
import './ForumAnswer.css'
import { Button, Container, Image } from 'react-bootstrap'
import avatar from "/public/img/avatar.png";
import imgForum from "/public/img/imgAutoArticle1.jpg";

const dictionaries  = {
    text1: {
      date: '30.05.2023',
      autor: 'Имя пользователя',
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
      `,
      img: imgForum,
    },
    text2: {
        date: '30.05.2023',
        autor: 'Имя пользователя',
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        `,
      }
  };

export const ForumAnswer = ({id, setAnswer}) => {
    const dict = dictionaries [id]

    const answer = () => {
        setAnswer(true)
       };
      
       
    return(
    <>
    <Container className='forumAnswer'>
        <Container className='navbAnswer'>
            <Image src={avatar} className="avatarForum" roundedCircle />
            <Container className='navForum'>
                <div className='rowAnswer1'>
                <div className='dateAnswer fontRubbik14'>{dict.date}</div>
                </div>
                <div className='rowAnswer2'>
                <div className='nameAnswer fontRubbik14'>{dict.autor}</div>
                </div>
            </Container>
        </Container>
        <p className='textAnswerForum fontRubbik14'>{dict.text}</p>     
        <Image src={dict.img} className='imgAnswerForum'></Image>
        <div className='forBtn'>
        <Button className='fontRubbik14 answerForum' onClick={answer}>Ответить</Button>
        </div>
    </Container>
</>
)}
import React from 'react';
import './ForumHome.css';
import { Container, Image, Form, Button } from 'react-bootstrap';
import CardFavoriteQuestion from '/src/Components/CardFavoriteQuestion'
import Footer from '/src/Components/Footer'

export const ForumHome = () => {
  
    return (
      <>
      <Container className='forumHome'>
        <div className='btnHome'>
        <Button href='/' className='fontRubbik14 textForumHome'>Назад</Button>
        </div>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true' href='/forum1'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <CardFavoriteQuestion nameQueComm='Ответов: 12000'
            name='Название темы' isQuea='true'/>
        <Button href='/newForum' className='butForumHome' >Добавить обсуждение</Button>
    </Container>
    < Footer />
      </>
    );
  };
  
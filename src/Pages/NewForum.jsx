import React, { useState } from 'react';
import './NewForum.css';
import { Container, Image, Form, Button } from 'react-bootstrap';
import clip from '/public/img/clipWhite.svg';
import Footer from '/src/Components/Footer'

export const NewForum = () => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState('50px');

  const handleChange = (e) => {
    setValue(e.target.value);
    setHeight(`${e.target.scrollHeight}px`);
  };

  return (
    <>
    <Container className='newForumPage'>
      <Container className='newForum'>
        <Form.Control
         type="text" 
          id='writeAnswer'
          className="newFormName"
          placeholder='Введите название темы'
        />
        <Form.Control
          as="textarea"
          id='writeAnswer'
          value={value}
          className="newForm"
          placeholder='Начните вводить текст...'
          onChange={handleChange}
          style={{
            height: `${height}`,
            minHeight: '50px', 
          }}
        />
        <Container className='newGroupClipSend'>
          <Image className='imgClipAnswerWrite' src={clip} />
          <Button className='newBut' >Отправить</Button>
        </Container>
      </Container>
      </Container>
      <Footer />
    </>
  );
};

import React, { useState } from 'react';
import './ForumWriteAnswer.css';
import { Container, Image, Form, Button } from 'react-bootstrap';
import clip from '/public/img/clipWhite.svg';

export const ForumWriteAnswer = ({setAnswer}) => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState('50px');

  const handleChange = (e) => {
    setValue(e.target.value);
    setHeight(`${e.target.scrollHeight}px`);
  };

  const answer = () => {
    setAnswer(false)
   };

  return (
    <>
      <Container className='forumWriteAnswer'>
        <Form.Control
          as="textarea"
          id='writeAnswer'
          value={value}
          className="formWriteAnswer"
          placeholder='Начните вводить текст...'
          onChange={handleChange}
          style={{
            height: `${height}`,
            minHeight: '50px', 
          }}
        />
        <Container className='groupClipSend'>
          <Image className='imgClipAnswerWrite' src={clip} />
          <Button className='butWriteAnswer' onClick={answer}>Отправить</Button>
        </Container>
      </Container>
    </>
  );
};

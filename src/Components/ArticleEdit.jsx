import React, { useEffect, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import './ArticleEdit.css'
import clip from '/public/img/clip.svg'
import save from '/public/img/save.svg'
import imgAuto from '/public/img/imgAutoArticle1.jpg'

const dictionaries  = {
  text1: {
    title: 'Замена лампочки в салоне',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    img: imgAuto,
  },
  text2: {
    title: 'Замена лампочки в салоне',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    }
};

export const ArticleEdit = ({id}) => {
  const dictionary = dictionaries [id] || {}; 
  const [value, setValue] = useState(dictionary.text);
  const [height, setHeight] = useState('85px');

  useEffect(() => {
    setHeight('auto');
    setHeight(`${document.getElementById(id).scrollHeight}px`);
  }, [value, id]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <>
      <Form className='formsArticleEdit'>
        <Form.Group >
          <Form.Control type="text"  className="formArtilceEdit labelArticle" placeholder='Введите название подраздела' defaultValue={dictionary.title} />
        </Form.Group>
        <Form.Group>
          <Form.Control 
            as="textarea"
            id={id}
            className="textArticle formArtilceEdit"
            value={value}
            defaultValue={dictionary.text}
            placeholder='Начните вводить текст'
            onChange={handleChange}
            style={{height: `${height}`,
            minHeight: '85px', }}
          />
        <Image className='imgClip' src={clip}></Image>
        <Image className='imgSave' src={save}></Image>
        </Form.Group>
      </Form>
    </>
  );
};

/*
useEffect(() => {
    const textArea = document.getElementById(id);
    textArea.addEventListener('input', function () {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
    textArea.dispatchEvent(new Event('input')); 
  }, []);

    const [height, setHeight] = useState('auto');

  const handleChange = (e) => {
    setValue(e.target.value);
    setHeight('auto');
    setHeight(e.target.scrollHeight + 'px');
  };
*/
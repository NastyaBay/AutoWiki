import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { ArticleEdit } from '/src/Components/ArticleEdit';
import Footer from '/src/Components/Footer';
import './AutoEdit.css';

export const AutoEdit = () => {
  const [subsections, setSubsections] = useState([1, 2]);

  const addSubsection = () => {
    const newSubsections = [...subsections, subsections.length + 1];
    setSubsections(newSubsections);
  };

  return (
    <>
      <div className='autoEditPage'>
        <Container className='cardAutoEdit'>
          <h2 className='heading fontRubbik20'>Toyota Corolla
            <hr className='hrGuide'></hr>
          </h2>
          <h1 className='heading fontRubbik22'>Электроника
            <hr className='hrGuide'></hr>
          </h1>
          {subsections.map((sectionId) => (
            <ArticleEdit key={`text${sectionId}`} id={`text${sectionId}`} />
          ))}
          <Button className='buttonEditArticle' onClick={addSubsection}>
            Добавить подраздел
          </Button>
        </Container>
      </div>
      <Footer />
    </>
  );
};
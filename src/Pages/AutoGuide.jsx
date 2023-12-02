import React from 'react'
import './AutoGuide.css'
import Footer from '/src/Components/Footer'
import Content from '/src/Components/Content'
import { Container, Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import edit from '/public/img/edit.svg'
import CardFavoriteQuestion from '/src/Components/CardFavoriteQuestion'
import {Article} from '/src/Components/Article'


export const AutoGuide = () => (
    <>
    <div className='autoPage'>
        <div><Content /></div>
        <div className='autoBasicContent'>
            <Container className='cardAuto'>
                <Link to='/auto/edit'><Image src={edit} className='editImg'></Image></Link>
                <h2 className='fontRubbik20'>Toyota Corolla
                    <hr className='hrGuide'></hr></h2>
                <h1 className='fontRubbik22'>Электроника
                    <hr className='hrGuide'></hr></h1> 
                <Article id='text1'/>
                <Article id='text2'/>
            </Container>
            <Container className='cardAuto2'>
            <h3 className='heading fontRubbik18'>Другие решения:
                <hr className='hrGuide'></hr></h3>
            <Container className='groupDataAuto'>
                <CardFavoriteQuestion nameQueComm='Комментарии: 123'
                 name='Название темы' isQuea='true' className='cardAutoDecision' classText='textAutoDecision'/>
                <CardFavoriteQuestion nameQueComm='Комментарии: 123'
                 name='Название темы' isQuea='true' className='cardAutoDecision' classText='textAutoDecision'/>
                <CardFavoriteQuestion nameQueComm='Комментарии: 123'
                 name='Название темы' isQuea='true' className='cardAutoDecision' classText='textAutoDecision'/>  
                <p className='fontRubbik16 decision'>Ещё больше решений</p>    
            </Container>            
        </Container>
        </div>
    </div>
    <Footer /> 
</>
)
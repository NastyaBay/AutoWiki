import React from 'react'
import './Auto.css'
import Footer from '/src/Components/Footer'
import Content from '/src/Components/Content'
import { Container, Image } from 'react-bootstrap'
import auto from '/public/img/autoToyota.png'
import { LikeButton } from '/src/Components/like';
import toyotaDock from '/public/Toyota-Corolla-XI-E160-E170.pdf'

export const Auto = () => (
    <>
    <div className='autoPage'>
    <div><Content /></div>
    <div className='autoBasicContent'>
        <Container className='cardAutoName'>
            <Image className='autoImage' src={auto}></Image>
            <div className='headAuto'>
                <p className='nameAuto'>Toyota Corolla</p>
                <p className='descriptionAuto fontRubbik18'>11 поколение, 2012-2018 (E170, E180)</p>
            </div>
            <LikeButton />
        </Container>
        <Container className='cardAutoDock'>
            <h2 className='textDock fontRubbik18'>Официальная документация:</h2>
            <div className='dockAuto'>
                <iframe src={toyotaDock} width="100%" height="720" className='is-dark'>не удалось показать документ</iframe>
            </div>
        </Container>
    </div>
    </div>
    <Footer /> 
    </>
)
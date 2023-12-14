import React from 'react'
import { Row, Col, Button} from 'react-bootstrap';
import CustomDropdownButton from '/src/Components/DropHome'
import Footer from '/src/Components/Footer'
import './Forum.css'


//главная страница
export const Forum = () => (
    <>
        <div className='groupForum'>  
            <Row className='rowForum'>
                <Col lg={1} className="dropForum1">
                    <CustomDropdownButton name='Марка' />  
                </Col>
                <Col lg={2} className="dropForum2">
                    <CustomDropdownButton name='Модель' />
                </Col> 
                <Col lg={3} className="dropForum3">
                    <CustomDropdownButton name='Раздел'/>
                </Col> 
            </Row>
            <Row className='row2'>  
                <Col lg={1} className='colButtonForum1'>
                    <Button href='/autoAdd' className='buttonForum1 buttonForum'>Добавить автомобиль</Button>
                </Col>
                <Col lg={2} className='colButtonForum2'>
                    <Button href='/forumHome' className='buttonForum2 buttonForum'>Найти темы</Button>
                </Col>
            </Row>
        </div>
        <Footer /> 
    </>
)
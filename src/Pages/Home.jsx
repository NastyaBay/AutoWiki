import React from 'react'
import { Row, Col, Button} from 'react-bootstrap';
import CustomDropdownButton from '/src/Components/drop'
import Footer from '/src/Components/Footer'
import './Home.css'


//главная страница
export const Home = () => (
    <>
        <div className='groupHome '>  
            <Row className='rowHome'>
                <Col lg={1} className="dropHome1">
                    <CustomDropdownButton name='Марка' />  
                </Col>
                <Col lg={2} className="dropHome2">
                    <CustomDropdownButton name='Модель' />
                </Col> 
                <Col lg={3} className="dropHome3">
                    <CustomDropdownButton name='Поколение'/>
                </Col> 
            </Row>
            <Row className='row2'>  
                <Col lg={1} className='colButtonHome1'>
                    <Button href='/autoAdd' className='buttonHome1 buttonHome'>Добавить автомобиль</Button>
                </Col>
                <Col lg={2} className='colButtonHome2'>
                    <Button href='/auto' className='buttonHome2 buttonHome'>Найти</Button>
                </Col>
            </Row>
        </div>
        <Footer /> 
    </>
)
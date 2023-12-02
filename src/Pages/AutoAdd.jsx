import React from 'react'
import {Button, Form, Row, Col} from 'react-bootstrap';
import Footer from '/src/Components/Footer'
import './AutoAdd.css'
import CustomDropdownButton from '/src/Components/drop'


//главная страница
export const AutoAdd = () => (
    <>
        <div className='groupAdd '>  
            <div className='textAdd fontRubbik18'>Добавление автомобиля</div>
            <Form>
            <Row className='addButGroup'>
                <Col lg={1} className="addBut addBut1">
                    <CustomDropdownButton name='Введите марку' />  
                </Col>
                <Col lg={2} className="addBut addButCenter">
                    <CustomDropdownButton name='Введите модель' />
                </Col> 
                <Col lg={3} className="addBut addBut2">
                    <CustomDropdownButton name='Введите поколение'/>
                </Col> 
            </Row>
            <Button href='' className='buttonAdd'>Добавить автомобиль</Button>      
            </Form>
        </div>
        <Footer /> 
    </>
)
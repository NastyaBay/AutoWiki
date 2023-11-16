import React from 'react'
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Registration.css'

export const Registration = () => (
    <>
        <div className='groupReg '>
            <ButtonGroup aria-label="Basic example" className='groupBtn fontRubbik18'>
                <Button className='otherBut'><Link to="/login" className='otherBut'>Вход</Link></Button>
                <Button className='activeBut'>Регистрация</Button>
            </ButtonGroup>
            <Form>
                <Form.Group className="formLogReg" controlId="formBasicEmail">
                    <Form.Label className='LabelFormRegLog'>Почта</Form.Label>
                    <Form.Control type="email" placeholder="testmail@gmail.com" className='regForm'/>
                </Form.Group>
                <Form.Group className="formLogReg" controlId="formBasicPassword">
                    <Form.Label className='LabelFormRegLog'>Пароль</Form.Label>
                    <Form.Control type="password" className='regForm'/>
                </Form.Group>
                <Form.Group className="formLogReg" controlId="formBasicPassword">
                    <Form.Label className='LabelFormRegLog'>Подтверждение пароля</Form.Label>
                    <Form.Control type="password" className='regForm'/>
                </Form.Group>
            </Form>
            <Button className='entry regForm' >Создание аккаунта</Button>
        </div>
        <p className='rulesLogReg'>При входе вы принимаете <span className='underline textBody'>условия использования</span> сайта.</p>
    </>
)
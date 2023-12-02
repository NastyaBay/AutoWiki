import React from 'react'
import './Login.css'
import {Button, ButtonGroup, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Login = () => (
    <>
        <div className='groupLogin'>
            <ButtonGroup aria-label="Basic example" className='groupBtn'>
                <Button className='activeBut'>Вход</Button>
                <Link to="/registration" className='otherButLink'><Button className='otherBut'>Регистрация</Button></Link>
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
            </Form>
            <Button className='entry' type='submit' >Войти</Button>
            <p className='password-remide underline textBody'>Напомнить пароль</p>
        </div>
        <p className='rulesLogReg'>При входе вы принимаете <span className='underline textBody'>условия использования</span> сайта.</p>
    </>
)
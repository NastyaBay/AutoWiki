import React, { useState } from 'react'
import './Login.css'
import {Button, ButtonGroup, Form} from 'react-bootstrap';

export const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }
    return(
    <>
        <div className='groupLogin'>
            {isLogin ? (
                <>
            <ButtonGroup aria-label="Basic example" className='groupBtn'>
                <Button className='activeBut'>Вход</Button>
                <Button className='otherBut'  onClick={toggleLogin}>Регистрация</Button>
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
            </>
            ) : (
                <>
                <ButtonGroup aria-label="Basic example" className='groupBtn fontRubbik18'>
                <Button className='otherBut' onClick={toggleLogin}>Вход</Button>
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
                </>
            )}
        </div>
        <p className='rulesLogReg'>При входе вы принимаете <span className='underline textBody'>условия использования</span> сайта.</p>
    </>
    )
}
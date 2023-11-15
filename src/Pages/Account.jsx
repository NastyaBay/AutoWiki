import React, { useState } from 'react'
import {Image, Container, Button, Form} from 'react-bootstrap';
import Footer from '/src/Components/Footer'
import './Account.css'
import avatarAcc from "/public/img/avatarAcc.png";
import like from '/public/img/like.png'
import LikeButton from '/src/Components/Like'

export const Account = () => {
    const [isFormVisibleName, setFormVisibleName] = useState(false);
   

    const toggleFormVisibilityName = () => {
      setFormVisibleName(!isFormVisibleName);
    };
    const handleSubmitName = (event) => {
        event.preventDefault();
        setFormVisibleName(false);
      };
    const handleCancelName = () =>{
        setFormVisibleName(false);
    }

    const [isFormVisibleEmail, setFormVisibleEmail] = useState(false);
    
    const toggleFormVisibilityEmail = () => {
        setFormVisibleEmail(!isFormVisibleEmail);
      };
      const handleSubmitEmail = (event) => {
          event.preventDefault();
          setFormVisibleEmail(false);
        };
      const handleCancelEmail = () =>{
          setFormVisibleEmail(false);
      }

      const [isFormVisiblePassword, setFormVisiblePassword] = useState(false);

      const toggleFormVisibilityPassword = () => {
        setFormVisiblePassword(!isFormVisiblePassword);
      };
      const handleSubmitPassword = (event) => {
          event.preventDefault();
          setFormVisiblePassword(false);
        };
      const handleCancelPassword = () =>{
          setFormVisiblePassword(false);
      }

    return(
    <>
        <div className='accGroup'>
            <Container className='groupAccHead'>
                <Image src={avatarAcc} className="avatarAcc"roundedCircle />
                <Container className='nameUser'>Имя пользователя</Container>
            </Container>

            <Container className='groupAccData'>
                <Container className='fontRubbik14 accData'>
                     Контактные данные и пароль
                </Container>
                <Container className='groupData'>
                        {isFormVisibleName ? (
                        <>
                            <Container className='accListChange'>
                                <Form onSubmit={handleSubmitName}>
                                <Form.Label className='fontRubbik14'>Имя</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Имя пользователя"
                                    className='formAccName'
                                />
                                <Button className='butAccName' type="submit">Сохранить</Button>
                                <Button className='butAccName' onClick={handleCancelName}>Отмена</Button>
                                </Form>
                            </Container>
                            <hr className='hrAcc hrChange'></hr>
                        </>
                        ) : ( 
                        <>
                        <Container className='accList'>
                        <div className='fontRubbik14 textAcc'>
                            Имя
                            <div onClick={toggleFormVisibilityName} className='changeAcc'>Изменить</div>
                        </div>
                        <hr className='hrAcc'></hr>
                        </Container>
                        </>
                        )}

                        {isFormVisibleEmail ? (
                        <>
                            <Container className='accListChange'>
                            <Form onSubmit={handleSubmitEmail}>
                            <Form.Group  controlId="formBasicEmail">
                                <Form.Label className='fontRubbik14' >E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Почта"
                                    className='formAccName'
                                />
                                <Form.Label className='fontRubbik14 labelPassword' >Пароль</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className='formAccName'
                                />
                                <Button className='butAccName' type='submit'>Подтвердить</Button>
                                <Button className='butAccName' onClick={handleCancelEmail}>Отмена</Button>
                                </Form.Group>
                                </Form>
                            </Container>
                            <hr className='hrAcc hrChange'></hr>
                        </>
                        ) : ( 
                        <>
                        <Container className='accList'>
                        <div className='fontRubbik14 textAcc'>
                            Email
                            <div onClick={toggleFormVisibilityEmail} className='changeAcc'>Изменить</div>
                        </div>
                        <hr className='hrAcc'></hr>
                        </Container>
                        </>
                        )}

                        {isFormVisiblePassword ? (
                        <>
                            <Container className='accListChange'>
                            <Form onSubmit={handleSubmitPassword}>
                            <Form.Group  controlId="formBasicPassword">
                                <div className='fontRubbik14'>Пароль</div>
                                <Form.Label className='fontRubbik14 labelPassword' >Старый пароль</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    className='formAccName'
                                />
                                <Form.Label className='fontRubbik14 labelPassword' >Новый пароль</Form.Label>
                                <Form.Control type="password" 
                                    className='formAccName'
                                />
                                <Form.Label className='fontRubbik14 labelPassword' >Подтверждение пароля</Form.Label>
                                <Form.Control
                                    type="password"
                                    className='formAccName'
                                />
                                <Button className='butAccName' type='submit'>Сохранить</Button>
                                <Button className='butAccName' onClick={handleCancelPassword}>Отмена</Button>
                                </Form.Group>
                                </Form>
                            </Container>
                            <hr className='hrAcc hrChange'></hr>
                        </>
                        ) : ( 
                        <>
                        <Container className='accList'>
                        <div className='fontRubbik14 textAcc'>
                            Пароль
                            <div onClick={toggleFormVisibilityPassword} className='changeAcc'>Изменить</div>
                        </div>
                        <hr className='hrAcc'></hr>
                        </Container>
                        </>
                        )}

    
                </Container>
            </Container>

            <Container className='groupAccFav'>
                <Container className='fontRubbik14 accData'>Избранное</Container>
                <Container className='fontRubbik14 accData underline'>Автомобили</Container>
                <Container className='groupData'>
                    <LikeButton name='Название автомобиля' href='https://yandex.ru/images/search?img_url=https%3A%2F%2Fpozdravik.com%2Fhoroshego-dnja%2Fkrasivye-9.jpg&lr=54&pos=0&rpt=simage&source=serp&text=%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B5%D0%B3%D0%BE%20%D0%B4%D0%BD%D1%8F'/>
                    <LikeButton name='Название автомобиля'/>
                    <LikeButton name='Название автомобиля'/>
                    <LikeButton name='Название автомобиля'/>
                </Container>
                <Container className='fontRubbik14 accData solution underline'>Решения</Container>
                <Container className='groupData'>
                    <LikeButton name='Название темы'/>
                    <LikeButton name='Название темы'/>
                    <LikeButton name='Название темы'/>
                </Container>
            </Container>

            <Container className='groupAccQuestion'>
                <Container className='fontRubbik14 accData'>Мои вопросы</Container>
                <Container className='groupData'>
                    <LikeButton name='Название темы' isQuea='true'/>
                    <LikeButton name='Название темы' isQuea='true'/>
                    <LikeButton name='Название темы' isQuea='true'/>
                    <LikeButton name='Название темы' isQuea='true'/>
                    
                </Container>
                <Button className='buttonAccQuestion'>Задать вопрос</Button>
            </Container>
        </div>
        <Footer className='ava'/> 
    </>
    )
}
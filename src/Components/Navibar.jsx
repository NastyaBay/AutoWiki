import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navibar.css'

import logo from "/public/img/logo.png";
import avatar from "/public/img/avatar.png";

//компонент шапки
export default function NaviBar() {
    return(
    <>
    <Navbar collapseOnSelect variant="dark">
       <Container className="containerHead">
          <Navbar.Brand href="/">
                <img src={logo} height="40" width="40"
                  className="d-line-block align-top" alt="Логотип"
                />
              </Navbar.Brand>  
                <Navbar.Brand className="logoText">Auto<span className="logo">Wiki</span></Navbar.Brand>  
                <Navbar.Toggle aria-controls="responsiva-navbar-nav"/>
                <Navbar.Collapse id="responsiva-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/" className="textBody">Главная</Link></Nav.Link>
                        <Nav.Link><Link to="/users" className="textBody">Форум</Link></Nav.Link>
                    </Nav>
                    {false ? (
                      <>
                      <NavDropdown className="avatarDrop" title={<Image src={avatar} className="avatar" roundedCircle />}>
                        <NavDropdown.Item href="#action/3.1"><Link to="/account" className="textName">Имя пользователя</Link></NavDropdown.Item>
                        <NavDropdown.Item href='/login'>Выйти</NavDropdown.Item>
                      </NavDropdown>
                      </>
                    ) : ( 
                      <Nav.Link className="entryHead" ><Link to="/login" className="textBody">Вход и регистрация</Link></Nav.Link>
                    )}
                </Navbar.Collapse>
                </Container>
            </Navbar>
    </>
    
)}

//<Nav.Link className="entryHead" ><Image src={avatar} className="avatar"roundedCircle /></Nav.Link>
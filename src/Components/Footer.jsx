import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Footer.css'

import vk from "/public/img/vk.svg";
import tg from "/public/img/tg.png";

//компонент подвала
const Footer = () => (
    <>
        <Container fluid className="containerFooter">
            <Container className="footer">
                <div className="underline rulesFooter textBody" >Правила пользования</div>
                <div className="contacts">
                    Контакты:
                    <img src={vk} className="imgHoverFooter imgVk"/>
                    <img src={tg} className="imgHoverFooter"/>    
                </div>       
            </Container>
        </Container>
    </>
)
export default Footer;

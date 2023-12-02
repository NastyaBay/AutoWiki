import React, { useState } from "react";
import './Content.css';
import { Link, useLocation } from "react-router-dom";

const Content = () => {
    const [activePage, setActivePage] = useState('auto'); 
    const location = useLocation();

    return (
    <div className="groupContent"> 
        <h1 className="textChapter fontRubbik14 textBody">
            <Link to='/auto' className={`linkContent ${location.pathname === '/auto' ? 'activePage' : ''}`} onClick={() => setActivePage('auto')}>
            Содержание
            </Link>
        </h1>
        <h1 className="textChapter fontRubbik14 textBody">
            <Link to='/auto/electric' className={`linkContent ${location.pathname === '/auto/electric' ? 'activePage' : ''}`}onClick={() => setActivePage('electric')}>
            Электроника
            </Link>
         </h1>
        <h2 className="textSubchapter fontRubbik14 textBody">Замена лампочки</h2>
        <h2 className="textSubchapter fontRubbik14 textBody">Замена лампочки</h2>
        <h1 className="textChapter fontRubbik14 textBody">Электроника</h1>
        <h2 className="textSubchapter fontRubbik14 textBody">Замена лампочки</h2>
    </div>
)
};
export default Content;
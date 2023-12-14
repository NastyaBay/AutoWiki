import React, { useState } from 'react'
import './DecisionForum.css'
import Footer from '/src/Components/Footer'
import { Container, Image } from 'react-bootstrap'
import {ForumQuestion} from '/src/Components/ForumQuestion'
import {ForumAnswer} from '/src/Components/ForumAnswer'
import {ForumWriteAnswer} from '/src/Components/ForumWriteAnswer'

export const DecisionForum = () => {
    const [isAnswer, setAnswer] = useState(false);

    return(
    <>
    <div className='forumDecision'>
            <Container className='forumPage'>
                <ForumQuestion setAnswer={setAnswer}/>
                <ForumAnswer id='text1' setAnswer={setAnswer}/>
                <ForumAnswer id='text2' setAnswer={setAnswer}/>
                {isAnswer ? <ForumWriteAnswer setAnswer={setAnswer}/>:<></>}
            </Container>           
    </div>
    <Footer /> 
</>
)}
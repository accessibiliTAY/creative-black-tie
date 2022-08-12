import React from "react";
import Accordion from "./Components/Accordion/Accordion";
import { faqContent } from "./Components/Data/faqContent";
import './App.css';

const FAQ = () => {

    return (
        <>
            <h1>Don't give a FAQ</h1>
            <div className='accordionList'>
                {faqContent.map(({topic, content, id})=> (
                    <Accordion topic={topic} content={content} id={id} key={id} />
                ))}
            </div>
        </>
    );
}

export default FAQ;

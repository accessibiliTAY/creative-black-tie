import React from "react";
import Accordion from "./Components/Accordion/Accordion";
import { faqContent } from "./Components/Data/faqContent";
import { useDeviceType} from "./useDeviceType";
import './App.css';

const FAQ = () => {
    const { isMobile,isTablet } = useDeviceType()

    return (
        <>
        {isMobile ? (
            <div className="mobileMainwell">
                <h1>Don't give a FAQ</h1>
                <div className='accordionList'>
                    {faqContent.map(({topic, content, id})=> (
                        <Accordion topic={topic} content={content} id={id} key={id} />
                    ))}
                </div>
            </div>
        ): null}

        {isTablet ? (
            <div className="mainwell">
                <h1>Don't give a FAQ</h1>
                <div className='accordionList'>
                    {faqContent.map(({topic, content, id})=> (
                        <Accordion topic={topic} content={content} id={id} key={id} />
                    ))}
                </div>
            </div>
        ): null}

        {!isMobile && !isTablet ? (
            <div className="mainwell">
                <h1>Don't give a FAQ</h1>
                <div className='accordionList'>
                    {faqContent.map(({topic, content, id})=> (
                        <Accordion topic={topic} content={content} id={id} key={id} />
                    ))}
                </div>
            </div>
        ):null}
        </>
    );
}

export default FAQ;

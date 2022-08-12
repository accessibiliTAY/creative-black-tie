/* eslint-disable no-undef */
import React, { useState } from "react";
import { useDeviceType} from "../../useDeviceType";
import './../../App.css';


const Accordion = ({topic, content, id}) => {
    const { isMobile, isTablet } = useDeviceType()
    const [isActive, setIsActive] = useState(false);
    return (
        <>

            {isMobile ? (
                <div className="mobileAccordion">

                </div>  
            ): null}

            {isTablet ? (
                <div className="tabletAccordion">

                </div>  
            ): null}

            {!isMobile && !isTablet ? (
                <div className="accordion">
                    <div className="accordionTopic">
                        <h2>
                            <button
                                type="button"
                                onClick={() => setIsActive(!isActive)}
                                className={isActive ? 'accordionHeader open' : 'accordionHeader closed'}
                                aria-expanded={isActive ? 'true' : 'false'}
                                aria-controls={id}
                            >
                                <span className="accordionTitle">{topic}</span>
                                <span className="openCloseButton"><i class="fi fi-rr-plus"></i></span>
                            </button>
                        </h2>
                    </div>
                    <div 
                    className='accordionContent'
                    id={id}
                    >
                        <div 
                        className={isActive ? 'accordionContentContainer accordionContentContainerOpen' : 'accordionContentContainer accordionContentContainerClosed'}
                        aria-hidden={isActive ? 'false' : 'true'}>
                            <p className='content'>{content}</p> 
                        </div>       
                    </div>
                </div>  
            ): null}                          
        </>
    );
}

export default Accordion;

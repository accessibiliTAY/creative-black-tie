/* eslint-disable no-undef */
import React from "react";
import { useDeviceType} from "../../useDeviceType";
import './../../App.css';


const Filter = ({clothingname, link, image, price, notes, index}) => {
    const { isMobile, isTablet } = useDeviceType()

    return (
        <>

            {isMobile ? (
                <div className="mobileFilter">
                    
                </div>  
            ): null}

            {isTablet ? (
                <div className="tabletFilter">

                </div>  
            ): null}

            {!isMobile && !isTablet ? (
                <div className="filter">

                </div>  
            ): null}                          
        </>
    );
}

export default Filter;

/* eslint-disable no-undef */
import React from "react";
import { useDeviceType} from "./useDeviceType";
import './App.css';


const OutfitCard = ({clothingname, link, image, price, notes, index}) => {
    const { isMobile, isTablet } = useDeviceType()

    return (
        <>

            {isMobile ? (
    <div className="mobilecardContainer">
        <div className="mobileOutfitCard" key={index}>
            <img className="mobileOutfitImage" src={image} alt='' />
            <div className="mobileOutfitCardDetails">
                <h2>
                    <a href={link}>{clothingname}</a>
                </h2>
                <p>Price: {price}</p>
                <p>Notes: {notes}</p>
            </div>
        </div>
    </div>  
            ): null}

            {isTablet ? (
                <div className="tabletcardContainer">
                    <div className="tabletOutfitCard" key={index}>
                        <div className="tabletleftCardScallop">
                            <img className="tabletOutfitImage" src={image} alt='' />
                            <div className="tabletOutfitCardDetails">
                                <h2>
                                    <a href={link}>{clothingname}</a>
                                </h2>
                                <p>Price: {price}</p>
                                <p>Notes: {notes}</p>
                            </div>
                        </div>
                    </div>
                </div>  
            ): null}

            {!isMobile && !isTablet ? (
                <div className="cardContainer">
                    <div className="OutfitCard" key={index}>
                        <div className="leftCardScallop">
                            <img className="OutfitImage" src={image} alt='' />
                            <div className="OutfitCardDetails">
                                <h2>
                                    <a href={link}>{clothingname}</a>
                                </h2>
                                <p>Price: {price}</p>
                                <p>Notes: {notes}</p>
                            </div>
                        </div>
                    </div>
                </div>  
            ): null}                          
        </>
    );
}

export default OutfitCard;

import React from "react";
import { useDeviceType} from "./useDeviceType";
import { mascContent } from "./mascContent";
import OutfitCard from "./Components/OutfitCard/OutfitCard";
import './App.css';


const Mascs = () => {
    const { isMobile, isTablet } = useDeviceType()

    return (
        <>
        <h1>For the Mascs</h1>
        {isMobile ? (
                <div className="mobileCardsList">
                    {mascContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}

            {isTablet ? (
                <div className="tabletCardsList">
                    {mascContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}

            {!isMobile && !isTablet ? (
                <div className="cardsList">
                    {mascContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}
        </>
    );
}

export default Mascs;

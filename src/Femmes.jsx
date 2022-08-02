import React from "react";
import { useDeviceType} from "./useDeviceType";
import { femmeContent } from "./femmeContent";
import OutfitCard from "./OutfitCard";
import './App.css';


const Femmes = () => {
    const { isMobile, isTablet } = useDeviceType()

    return (
        <>
            <h1>For the Femmes</h1>

            {isMobile ? (
                <div className="mobileCardsList">
                    {femmeContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}

            {isTablet ? (
                <div className="tabletCardsList">
                    {femmeContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}

            {!isMobile && !isTablet ? (
                <div className="cardsList">
                    {femmeContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div> 
            ): null}
        </>
    );
}

export default Femmes;

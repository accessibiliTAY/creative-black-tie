import React, { useState, useMemo } from "react";
import { useDeviceType} from "./useDeviceType";
import { mascContent } from "./mascContent";
import Pagination from "./Components/Pagination/Pagination";
import OutfitCard from "./Components/OutfitCard/OutfitCard";
import './App.css';

let PageSize = 10;


const Mascs = () => {
    const { isMobile, isTablet } = useDeviceType()
    const [currentPage, setCurrentPage] = useState(1);
    const currentMascContent = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return mascContent.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    return (
        <>
        
        {isMobile ? (
            <div className="mainwell">
                <h1>For the Mascs</h1>
                <div className="mobileCardsList">
                    {currentMascContent.map(({clothingname, link, image, price, notes, index}) => (
                        <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                </div>
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={mascContent.length}
                    pageSize={PageSize}
                    onPageChange={page => setCurrentPage(page)}
                    /> 
                </div> 
            ): null}

            {isTablet ? (
                <div className="mainwell">
                    <h1>For the Mascs</h1>
                    <div className="tabletCardsList">
                        {currentMascContent.map(({clothingname, link, image, price, notes, index}) => (
                            <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                    </div> 
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={mascContent.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /> 
                </div>
            ): null}

            {!isMobile && !isTablet ? (
                <div className="mainwell">
                    <h1>For the Mascs</h1>
                    <div className="cardsList">
                        {currentMascContent.map(({clothingname, link, image, price, notes, index}) => (
                            <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={mascContent.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />                
                </div> 
            ): null}
        </>
    );
}

export default Mascs;

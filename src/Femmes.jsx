import React, { useState, useMemo } from "react";
import { useDeviceType} from "./useDeviceType";
import { femmeContent } from "./femmeContent";
import OutfitCard from "./Components/OutfitCard/OutfitCard";
import Pagination from "./Components/Pagination/Pagination";
// import FilterButton from "./Components/Filter/FilterButton";
import './App.css';

let PageSize = 10;

const Femmes = () => {
    const { isMobile, isTablet } = useDeviceType()
    const [currentPage, setCurrentPage] = useState(1);
    const currentFemmeContent = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return femmeContent.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    return (
        <>
            {isMobile ? (
                <div className="mainwell">
                    <h1>For the Femmes</h1>
                    <div className="mobileCardsList">
                        {currentFemmeContent.map(({clothingname, link, image, price, notes, index}) => (
                            <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={femmeContent.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    /> 
                </div> 
            ): null}

            {isTablet ? (
                <div className="mainwell">
                    <h1>For the Femmes</h1>
                    <div className="tabletCardsList">
                        {currentFemmeContent.map(({clothingname, link, image, price, notes, index}) => (
                            <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={femmeContent.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div> 
            ): null}

            {!isMobile && !isTablet ? (
                <div className="mainwell">
                    <h1>For the Femmes</h1>
                    {/* <div>
                    {currentFemmeContent.map(({price}) => (
                            <FilterButton price={price} /> ))}
                    </div> */}
                    <div className="cardsList">
                        {currentFemmeContent.map(({clothingname, link, image, price, notes, index}) => (
                            <OutfitCard clothingname={clothingname} link={link} image={image} price={price} notes={notes} key={index} /> ))}
                    </div> 
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={femmeContent.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>    
            ): null}
        </>
    );
}

export default Femmes;

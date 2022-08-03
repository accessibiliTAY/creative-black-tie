/* eslint-disable no-undef */
import React from "react";
import classnames from 'classnames';
import { useDeviceType} from "../../useDeviceType";
import { usePagination, DOTS } from "./usePagination";
import '../../App.css';


const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  }) => {
    
    const { isMobile, isTablet } = useDeviceType()
    
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
      });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
    return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <>

            {isMobile ? (
                <div className="mobilePagination">
                    
                </div>  
            ): null}

            {isTablet ? (
                <div className="tabletPagination">
                    
                </div>  
            ): null}

            {!isMobile && !isTablet ? (
                <div className="pagination">
                    <ul className='pagination-container'>
                        {/* Left navigation arrow */}
                        <li
                            className={classnames('pagination-item', {
                            disabled: currentPage === 1
                            })}>
                                <button className="paginationButton" onClick={onPrevious}><i className="fi fi-rr-angle-left"></i>previous</button>
                        </li>
                        {paginationRange.map(pageNumber => {    
                            // If the pageItem is a DOT, render the DOTS unicode character
                            if (pageNumber === DOTS) {
                            return <li className="pagination-item dots">&#8230;</li>;
                            }
                            // Render our Page Pills
                            return (
                            <li
                                className={classnames('pagination-item', {
                                selected: pageNumber === currentPage
                                })}
                                >
                                    <button className="paginationButton" onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
                            </li>
                            );
                        })}
                        {/*  Right Navigation arrow */}
                        <li
                            className={classnames('pagination-item', {
                            disabled: currentPage === lastPage
                            })}
                            onClick={onNext}>
                                <button className="paginationButton" onClick={onPrevious}>next<i className="fi fi-rr-angle-right"></i></button>
                            
                        </li>
                    </ul>  
                </div>  
            ): null}                          
        </>
    );
}

export default Pagination;

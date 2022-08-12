/* eslint-disable no-undef */
import React, {useState} from "react";
import './../../App.css';


const FilterButton = ({price}) => {
    const [filter, setFilter] = useState();
    const filterItems = (val) => {
        
    }

    return (
        <>
        <div>
            <label htmlFor='filterbyprice'>Filter by Price</label>
            <select
            value={filter}
            className='filterSelect'
            id='filterbyprice'
            onChange={(event) => {setFilter(event.target.value)}}
            >
                <option value='any'>Any price</option>
                <option value='0-100'>$0-100</option>
                <option value='101-200'>$101-200</option>
                <option value='200+'>$200+</option>
            </select>

        </div>                      
        </>
    );
}

export default FilterButton;

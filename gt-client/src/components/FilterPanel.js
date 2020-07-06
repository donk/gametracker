import React from 'react';
import styled from 'styled-components';

const FilterContent = styled.div`
  width:100%;
`;

const FilterPanel = (props) => {

  const changeCount = (event) => {
    const newCount = event.target.value;
    console.log('setting count');
    props.changeCount(newCount);
  }

  return(
    <FilterContent>
      <select onChange={changeCount}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="50">50</option>
      </select>
    </FilterContent>
  )
}

export default FilterPanel;
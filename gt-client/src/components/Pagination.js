import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const PaginationFrame = styled.div`
  display:flex;
  width:100%;
  justify-content:center;
  margin-top:15px;

  .page {
      padding: 4px 10px;
      margin: 0 5px;
      border-radius: 5px;
      border: rgba(255, 255, 255, 0.2) 1px solid;
      text-decoration:none;
      color:white;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }

      &.selected{
        background-color:#CC5500;
      }
    }
`;

const Pagination = (props) => {

  const curPage = parseInt(props.curPage);
  return(
    <PaginationFrame>
      <NavLink className="page" to={`${curPage - 1}`}>
        Last Page
      </NavLink>
      <NavLink className="page" to={`${curPage + 1}`}>
        Next Page
      </NavLink>
    </PaginationFrame> 
  )
 
}

export default Pagination;
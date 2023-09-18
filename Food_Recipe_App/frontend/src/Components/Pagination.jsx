import React from 'react'
import styled from 'styled-components';

const Pagination = ({currentPage, totalPage,onPageChange}) => {
 
    const pageNumbers = [];
    for(let i=1;i<=Math.min(10, totalPage);i++){
        pageNumbers.push(i);
    }
     
    return (
    <BUTTON>
      {pageNumbers.map((el)=>(
        <button
        key={el} 
        onClick={()=> onPageChange(el)}
        className={currentPage === el? 'active' : ''}
        >
            {el}
        </button>
      ))}
    </BUTTON>
  )
}

export default Pagination;


const BUTTON = styled.div`
    display: flex;
    gap: 5px;

  button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  button.active {
    background-color: #ec8577;
    color: white;
    border: 1px solid #ec8577;
  }

`
import React, { useState } from 'react';
import classes from './Pagination.module.css'

export const Pagination = ({start, end, setForwardData, setBackwardData}) => {
  const [pageNo, setPageNo] = useState(1);

  const handleForward = () => {
    if (pageNo !== end) {
      setPageNo(pageNo + 1);
    }
    setForwardData();
  }

  const handleBackward = () => {
    if (pageNo !== start) {
      setPageNo(pageNo - 1);
    }
    setBackwardData();
  }

  return (
    <div className={classes.pagination}>
      <button onClick={handleBackward}><i className="fas fa-caret-left"></i></button>
      <div>
        <p>{pageNo}</p>
      </div>
      <button onClick={handleForward}><i className="fas fa-caret-right"></i></button>
    </div>
  )
}

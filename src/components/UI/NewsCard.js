import React from 'react';
import { report } from '../../api/report';
import classes from './NewsCard.module.css';

export const NewsCard = ({ heading, content, imgurl, url, reportTitle }) => {
  const handleReport = () => {
    report(reportTitle);
    console.log(reportTitle);
  }
  
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={imgurl} alt='news-img'></img>
      </div>
      <div className={classes.content}>
        <h3>{heading}</h3>
        <p>{content}</p>
        <div className={classes.buttons}>
          <a href={url}>Read More</a>
          <button onClick={handleReport}>Report</button>
        </div>
      </div>
    </div>
  )
}

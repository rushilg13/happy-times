import React, { useEffect, useState } from 'react';
import { NewsCard } from '../UI/NewsCard';
import { newsAPI } from '../../api/newsAPI';
import { useParams } from 'react-router-dom';
import { DropDown } from '../UI/DropDown';
import { Pagination } from '../UI/Pagination';
import loader from '../../assets/loader.gif';
import classes from './Dashboard.module.css';
import Clock from '../UI/Clock';

export const Dashboard = () => {
    const [newsData, setNewsData] = useState();
    const [country, setCountry] = useState();
    const [startSlice, setStartSlice] = useState(0);
    const [endSlice, setEndSlice] = useState(5);
    const [isLoading, setIsLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        setIsLoading(true);
        newsAPI(category, country).then(res => {
            setNewsData(res);
            setIsLoading(false);
        });
    }, [category, country]);

    return (
        <div className={classes.dashboard}>
            <div>
                <div className={classes.header}>
                    <DropDown handleSelectCountry={country => setCountry(country)} />
                    <div className={classes.clock}>
                        <Clock />
                    </div>
                </div>
                {isLoading && <div className={classes.loader}>
                    <img src={loader} alt='loader' height='50px' width='150px'></img>
                </div>}
                {!isLoading && newsData && <div className={classes.cards}>
                    {newsData.slice(startSlice, endSlice).map((data, index) => <NewsCard heading={data.title} content={data.description} imgurl={data.urlToImage} url={data.url} author={data.author} reportTitle={data.title} key={index} />)}
                </div>}
                {!isLoading && <div className={classes.pagination}>
                    <Pagination
                        setForwardData={() => {
                            setStartSlice(endSlice);
                            setEndSlice(endSlice + 5);
                        }}
                        setBackwardData={() => {
                            setEndSlice(startSlice);
                            setStartSlice(startSlice - 5);
                        }}
                        start={1}
                        end={20} />
                </div>}
            </div>
        </div>
    )
}

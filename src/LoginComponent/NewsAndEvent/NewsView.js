import React, { useState, useCallback, useEffect } from 'react';
import AddNewsForm from './AddNewsForm';
import NewsViewCard from './NewsViewCard';

const NewsView = () => {
    const [newsList, setNewsList] = useState([]);


    const fetchStaffHandler = useCallback(async () => {
        // setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/news');
            if (!response.ok) throw new Error('Something Went Wrong in Fetching News');
            console.log(response);
            const data = await response.json();
            console.log(data);
            const loadNews = [];
            data.reverse();
            for (const a in data) loadNews.push({
                _id: data[a]._id,
                title: data[a].title,
                notice: data[a].notice,
                msg: data[a].msg,
            })
            setNewsList(loadNews);
        } catch (error) {
            console.log(error);
            console.log(" News me Ku ch Galat Ho Gya");
        }
    }, []);
    useEffect(() => {
        fetchStaffHandler();
    }, [fetchStaffHandler]);



    return (
        <div>

            <AddNewsForm recallfetchStaffHandler={fetchStaffHandler} />


            <div className="card text-white bg-secondary mb-1 text-center" >
                <div className="card-header text-white  bg-dark">News And Events</div>
                <div className="card-body text-secondary">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text list-unstyled">
                        {/* { console.log(newsList, "Hello" )} */}
                        {newsList.map((item) => {
                            console.log(item);
                            return (<NewsViewCard recallfetchStaffHandler={fetchStaffHandler} key={item._id} _id={item._id} title={item.title} notice={item.notice} msg={item.msg} />)
                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default NewsView;
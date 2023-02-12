import React, { useState, useCallback, useEffect } from 'react';
import AddNoticeForm from './AddNoticeForm';
import NoticeViewCard from './NoticeViewCard';

const NoticeView = () => {
    const [newsList, setNewsList] = useState([]);


    const fetchNoticeHandler = useCallback(async () => {
        // setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/notices');
            if (!response.ok) throw new Error('Something Went Wrong in Fetching News');
            console.log(response);
            const data = await response.json();
            console.log(data);
            const loadNotices = [];
            data.reverse();
            for (const a in data) loadNotices.push({
                _id: data[a]._id,
                title: data[a].title,
                msg: data[a].msg,
                by: data[a].by,
            })
            setNewsList(loadNotices);
        } catch (error) {
            console.log(error);
            console.log(" Notice me Ku ch Galat Ho Gya");
        }
    }, []);
    useEffect(() => {
        fetchNoticeHandler();
    }, [fetchNoticeHandler]);



    return (
        <div>

            <AddNoticeForm recallfetchNoticeHandler={fetchNoticeHandler} />


            <div className="card text-white bg-secondary mb-1 text-center" >
                <div className="card-header text-white  bg-dark">News And Events</div>
                <div className="card-body text-secondary">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text list-unstyled">
                        {/* { console.log(newsList, "Hello" )} */}
                        {newsList.map((item) => {
                            console.log(item);
                            return (<NoticeViewCard recallfetchNoticeHandler={fetchNoticeHandler} key={item._id} _id={item._id} title={item.title} notice={item.notice} msg={item.msg} by={item.by} />)
                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default NoticeView;
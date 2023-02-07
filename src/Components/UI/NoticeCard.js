import React, { useState, useCallback, useEffect } from 'react';
import CustomLI from './CustomLI';

const NoticeCard = () => {
    const [noticeList, setnoticeList] = useState([]);

    const fetchStaffHandler = useCallback(async () => {
        // setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/notices');
            if (!response.ok) throw new Error('Something Went Wrong in Fetching notice');
            console.log(response);
            const data = await response.json();
            console.log(data);
            const loadnotice = [];
            data.reverse();
            for (const a in data) loadnotice.push({
                _id: data[a]._id,
                title: data[a].title,
            })
            setnoticeList(loadnotice);
        } catch (error) {
            console.log(error);
            console.log(" notice me Ku ch Galat Ho Gya");
        }
    }, []);
    useEffect(() => {
        fetchStaffHandler();
    }, [fetchStaffHandler]); 

    return (
        <div>
            <div className="card text-white bg-secondary mb-1 text-center" >
                <div className="card-header bg-dark">Notice</div>
                <div className="card-body">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text list-unstyled">
                       {/* { console.log(noticeList, "Hello" )} */}
                        {noticeList.map((item)=>{
                            console.log(item);
                            return(<CustomLI key={item._id} title={item.title} _id={item._id} genre='notices'/>)
                        })}
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}
export default NoticeCard;
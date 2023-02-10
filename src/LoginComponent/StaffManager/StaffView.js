import React, { useState, useCallback, useEffect } from 'react';
import AddNoticeForm from './AddStaffForm';
import NoticeViewCard from './StaffViewCard';

const StaffView = () => {
    const [staffList, setStaffList] = useState([]);


    const fetchStaffHandler = useCallback(async () => {
        // setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3030/staffs');
            if (!response.ok) throw new Error('Something Went Wrong in Fetching Staff');
            console.log(response);
            const data = await response.json();
            console.log(data);
            const loadStaff = [];
            data.reverse();
            for (const a in data) loadStaff.push({
                _id: data[a]._id,
                name: data[a].name,
                age: data[a].age,
                experience: data[a].experience,
                speciality: data[a].speciality,
                msg: data[a].msg,
            })
            setStaffList(loadStaff);
        } catch (error) {
            console.log(error);
            console.log(" Notice me Ku ch Galat Ho Gya");
        }
    }, []);
    useEffect(() => {
        fetchStaffHandler();
    }, [fetchStaffHandler]);



    return (
        <div>

            <AddNoticeForm recallfetchStaffHandler={fetchStaffHandler} />


            <div className="card text-white bg-secondary mb-1 text-center" >
                <div className="card-header text-white  bg-dark">Staff Members</div>
                <div className="card-body text-secondary">
                    {/* <h5 className="card-title"></h5> */}
                    <ul className="card-text list-unstyled">
                        {/* { console.log(newsList, "Hello" )} */}
                        {staffList.map((item) => {
                            console.log(item);
                            return (<NoticeViewCard recallfetchStaffHandler={fetchStaffHandler} key={item._id} _id={item._id} name={item.name} age={item.age} msg={item.msg} experience={item.experience} speciality={item.speciality} />)
                        })}
                    </ul>

                </div>
            </div>
        </div>
    );
}
export default StaffView;
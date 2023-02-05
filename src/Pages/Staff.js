import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React, { useCallback, useEffect, useState } from "react";
import StaffCard from "../Components/UI/StaffCard";

const Staff = () => {
    const [isLoading, setIsLoading] = useState('false');
    const [staffList, setStaffList] = useState([]);
    const fetchTaskHandler = useCallback(async()=>{
        setIsLoading(true);
        try{
            const response = await fetch('http://localhost:3030/staffs');
            if(!response.ok) throw new Error('Something Went Wrong');
            console.log(response);
            const data = await response.json();
            console.log(data);
            const loadStaff = [];
            for(const a in data) loadStaff.push({
                _id: data[a]._id,
                name:data[a].name,
                age: data[a].age,
                experience: data[a].experience,
                msg: data[a].msg,
                speciality: data[a].speciality,
            })
            setStaffList(loadStaff);
        }catch(error){
            console.log(error);
            console.log("Ku ch Galat Ho Gya");
        }
    },[]);
    useEffect(()=>{
        fetchTaskHandler();
    }, [fetchTaskHandler]);
    return (
        <div className="container d-flex flex-wrap align-items-center">
            {staffList.map((staffMember) => (
                <StaffCard key= {staffMember._id} name={staffMember.name} age={staffMember.age} experience={staffMember.experience} speciality={staffMember.speciality} msg={staffMember.msg}></StaffCard>
            ))}
        </div>);
}
export default Staff;
import React from "react";
import StaffCard from "../Components/UI/StaffCard";
const dummyStaff = [{
    name: "Sugandh Srivastava",
    age: "22",
    experience: "2",
    subjects: "Social Science"
}, {
    name: "Suryansh Srivastava",
    age: "21",
    experience: "0.5",
    subjects: "Mathematics"
}, {
    name: "Shivam Gulia",
    age: "21",
    experience: "1",
    subjects: "General Knowledge"
}, {
    name: "Yash Agrawal",
    age: "21",
    experience: "3",
    subjects: "English"
}, {
    name: "Shashank Srivastava",
    age: "21",
    experience: "2",
    subjects: "Hindi"
}, {
    name: "Dummy",
    age: "21",
    experience: "12",
    subjects: "Science, General Knowledge"
}];
const Staff = () => {

    return (
        <div className="container d-flex flex-wrap align-items-center">
            {dummyStaff.map((dummy) => (
                <StaffCard name={dummy.name} age={dummy.age} experience={dummy.experience} subjects={dummy.subjects}></StaffCard>
            ))}
        </div>);
}
export default Staff;
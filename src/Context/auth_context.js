
import React, { useState } from "react";


// const logoutHandler = async (props) => {
//     isLoggedIn = false;
//     token = "";
//     localStorage.removeItem("token");
// }
const AuthContext = React.createContext({
    isLoggedIn: false,
    loginHandler: ()=>{},
    logoutHandler: ()=>{},
    token: "",
});
export const AuthContextProvider = (props) =>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    let token= '';
    async function loginHandler(props) {
        console.log(props);
        try {
            const response = await fetch('http://localhost:3030/admin/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: props.email,
                    password: props.password
                }),
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const data = await response.json();
            if (!response.ok) console.log("Something Went Wrong");
            console.log(data);
            if (data.token != null) {
                console.log(data.message, data.token);
                setIsLoggedIn(true);
                token = data.token;
                console.log(token);
                localStorage.setItem("token", token);
            } else {
                console.log(data.message);
            }
        } catch (err) {
            console.log("Error in auth context Login");
        }
    }
    return  <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        loginHandler: loginHandler,
        logoutHandler: ()=>{},
        token: token,}}>{props.children}</AuthContext.Provider>
};
export default AuthContext;
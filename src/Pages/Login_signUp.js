import React, { useContext, useRef } from "react";
import AuthContext from "../Context/auth_context";

const Login_signUp = () => {

    const ctx = useContext(AuthContext);
    const emailRef = useRef();
    const passwordRef = useRef();
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };  
        console.log(data);
        // console.log(ctx.isLoggedIn);
        ctx.loginHandler(data);
    }
    return (
        <form className="container p-5 border mt-5 mw-30" onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" ref={emailRef}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" id="password" ref={passwordRef}/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label">Save Password</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default Login_signUp;
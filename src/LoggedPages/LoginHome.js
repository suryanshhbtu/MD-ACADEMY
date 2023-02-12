import React, { useContext } from "react";
import Carousel from "../Components/UI/Carousel";
import NewsCard from "../Components/UI/NewsCard";
import NoticeCard from "../Components/UI/NoticeCard";
import AuthContext from "../Context/auth_context";

const LoginHome = () => {
    const ctx = useContext(AuthContext);
    console.log(ctx.isLoggedIn);
    
    return (<div className="container.fluid pl-5 pr-5 pt-4" >
        <div className="row">
            <div className="col">
                <NewsCard />
            </div>
            <div className="col-6">
                <Carousel />
            </div>
            <div className="col">
                <NoticeCard />
            </div>
        </div>        
    </div>);
}
export default LoginHome;
import React from "react";
import CardView from "../Components/UI/CardView";
import Carousel from "../Components/UI/Carousel";
import NewsCard from "../Components/UI/NewsCard";
import NoticeCard from "../Components/UI/NoticeCard";
const Home = () => {
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

  </div>)
}
export default Home;
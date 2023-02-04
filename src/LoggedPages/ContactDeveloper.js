import React from "react";
import CardView from "../Components/UI/CardView";
import Carousel from "../Components/UI/Carousel";
const ContactDeveloper = () => {
    return (<div className="container.fluid pl-5 pr-5 pt-4" >
        <div className="row">
            <div className="col">
                <CardView />
            </div>
            <div className="col-6">
                <Carousel />
            </div>
            <div className="col">
                <CardView />
            </div>
        </div>
    </div>);
}
export default ContactDeveloper;
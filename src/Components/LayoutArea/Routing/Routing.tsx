
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Burger from "../../DetailsArea/Burger/Burger";
import Calculator from "../../DetailsArea/Calculator/Calculator";
import Cloud from "../../DetailsArea/Cloud/Cloud";
import CouponSystem from "../../DetailsArea/CouponSystem/CouponSystem";
import HeathSystem from "../../DetailsArea/HeathSystem/HeathSystem";
import UnderConstruction from "../../DetailsArea/UnderConstruction/UnderConstruction";
import About from "../../HeaderArea/About/About";
import Contact from "../../HeaderArea/Contact/Contact";
import Page404 from "../../SharedArea/Page404/Page404";
import Main from "../Main/Main";
import "./Routing.css";

class Routing extends Component {

    public render(): JSX.Element {
        return (
            <div className="Routing">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    <Route path="/burger" element={<Burger />} />
                    <Route path="/cloud" element={<Cloud />} />
                    <Route path="/coupon_system" element={<CouponSystem />} />
                    <Route path="/under_constraction" element={<UnderConstruction />} />
                    <Route path="/calculator" element={<Calculator />} />
                    <Route path="/health_system" element={<HeathSystem />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>

            </div>
        );
    }
}

export default Routing;

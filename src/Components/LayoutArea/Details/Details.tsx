import { NavLink } from "react-router-dom";
import "./Details.css";

import burger from "../../../Assets/Images/burger3.png"
import cloud from "../../../Assets/Images/cloud.jpg"
import under_constr from "../../../Assets/Images/under_constr.png"
import shopping from "../../../Assets/Images/shopping4.jpg"
import calculator from "../../../Assets/Images/calculator2.png"
import health_system from "../../../Assets/Images/health_sys.png"

function Details(): JSX.Element {
    return (
        <div className="Details">
            <div className="p_container">
                <p id="weight">My projects:</p>
            </div>
            <br/>
            <br/>
            <div className="divs_container">
                <div className="project" id="first">
                    <NavLink to="coupon_system" className="NavLink"> <img id="shopping" src={shopping} /> </NavLink>
                </div> 
                <div className="project" id="second">
                    <NavLink to="burger" className="NavLink"> <img id="burger" src={burger} /> </NavLink>
                </div>
                <div className="project" id="third">
                    <NavLink to="cloud" className="NavLink"><img id="cloud" src={cloud} /> </NavLink>
                </div>
                <div className="project" id="forth">
                    <NavLink to="calculator" className="NavLink"><img id="calculator" src={calculator} /> </NavLink>
                </div>
                <div className="project" id="five">
                    <NavLink to="health_system" className="NavLink"><img id="health_system" src={health_system} /> </NavLink>
                </div>
                <div className="project" id="six">
                    <NavLink to="under_constraction" className="NavLink"><img id="under_constr" src={under_constr} /> </NavLink>
                </div>
            </div>
        </div >
    );
}

export default Details;

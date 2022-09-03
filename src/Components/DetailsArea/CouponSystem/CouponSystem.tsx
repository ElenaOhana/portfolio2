import "./CouponSystem.css";
import coupon_system from "../../../Assets/Images/shopping4.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';

function CouponSystem(): JSX.Element {
    return (
        <div className="CouponSystem">
			 <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={coupon_system} />
                        <span>Coupon system</span>
                    </div>
                    <div className="Theback">
                        <h3>Coupon system application</h3>
                        <p>Platform that enables suppliers to advertise and sell their coupons, including different functionality for companies, customers, and site admin; user authentication and authorization.  The system was built in phases: 1)develop the server‑side on Java core using a native SQL language query(JDBC). 2)Convert the native SQL to Spring‑boot‑JPA‑Data framework, JPQL. 3)Plug in the REST‑web‑services and develop the client‑side as a single page application on react using typescript extendable, HTML5, CSS3. </p>
                        <a href="https://github.com/ElenaOhana/coupon-system-stage3" target="_blank">
                        <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CouponSystem;

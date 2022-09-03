import "./HeathSystem.css";
import under_constr from "../../../Assets/Images/health_sys.png"
import FeedIcon from '@mui/icons-material/Feed';

function HeathSystem(): JSX.Element {
    return (
        <div className="HeathSystem">
			 <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={under_constr}/>
                            <span>Health system</span>
                    </div>
                    <div className="Theback">
                        <h3>Health system</h3>
                        <p>The CRM system for managing tests and corona vaccinations for patients at the health fund. Spring Boot and Spring Boot JPA data.</p>
                        <a><FeedIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeathSystem;

import "./UnderConstruction.css";
import under_constr from "../../../Assets/Images/under_constr.png"
import FeedIcon from '@mui/icons-material/Feed';

function UnderConstruction(): JSX.Element {
    return (
        <div className="UnderConstruction">
			
            <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={under_constr}/>
                            <span>Currency Exchange</span>
                    </div>
                    <div className="Theback">
                        <h3>Currency Exchange</h3>
                        <p>Currency Exchange app, allows customers to exchange one currency for another. REST and REST Template API, Swagger</p>
                        <a><FeedIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UnderConstruction;

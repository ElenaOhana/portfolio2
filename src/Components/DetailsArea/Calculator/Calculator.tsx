import "./Calculator.css";
import calculator from "../../../Assets/Images/calculator2.png";
import GitHubIcon from '@mui/icons-material/GitHub';

function Calculator(): JSX.Element {
    return (
        <div className="Calculator">
			 <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={calculator} />
                        <span>Android application</span>
                    </div>
                    <div className="Theback">
                        <h3>Android application</h3>
                        <p> Android app as a simple calculator with standard operations </p>
                        <a href="https://github.com/ElenaOhana/MyApp" target="_blank">
                        <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;

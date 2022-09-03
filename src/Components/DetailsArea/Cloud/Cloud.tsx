import "./Cloud.css";
import cloud from "../../../Assets/Images/cloud.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';

function Cloud(): JSX.Element {
    return (
        <div className="Cloud">
              <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={cloud} />
                        <span>Spring cloud</span>
                    </div>
                    <div className="Theback">
                        <h3>Spring cloud microservices</h3>
                        <p>Microservices Ecosystem</p>
                        <a href="https://github.com/ElenaOhana/spring-cloud-microservices" target="_blank">
                        <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
			
        </div>
    );
}

export default Cloud;

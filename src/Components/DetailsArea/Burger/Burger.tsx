import "./Burger.css";
import burger from "../../../Assets/Images/burger.png"
import GitHubIcon from '@mui/icons-material/GitHub';

function Burger(): JSX.Element {
    return (
        <div className="Burger">

            <div className="Maincountainer">
                <div className="Thecard">
                    <div className="Thefront">
                        <img src={burger} />
                        <span>Burger purchase app</span>
                    </div>
                    <div className="Theback">
                        <h3>Make your own burger</h3>
                        <p>A basic manipulation on DOM letting clients assemble their own burger depending on their preferences and prices. </p>
                        <a href="https://elenaohana.github.io/home-work-4-burger/" target="_blank">
                        <GitHubIcon/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Burger;

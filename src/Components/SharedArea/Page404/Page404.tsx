import "./Page404.css";
import { Link } from "react-router-dom";

function Page404(): JSX.Element {
    return (
        <div className="Page404">
			<p>Ooopps... there is no content for you... only for laugh...</p>
            <img src="https://media.giphy.com/media/cW64pEEZe0YZa/giphy.gif"/>
            <br/>
            <br/>
            <br/>
            <Link id ="link" to="home"> Go home </Link>
        </div>
    );
}

export default Page404;

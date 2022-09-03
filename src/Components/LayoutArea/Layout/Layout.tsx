import Benaim from "../Benaim/Benaim";
import Details from "../Details/Details";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header><Header/></header>
            <aside><Details/></aside>
            <menu><Benaim/></menu>
            <main><Routing/></main>
        </div>
        
    );
}

export default Layout;

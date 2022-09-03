import "./About.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function About(): JSX.Element {
    return (
        <div className="About">
			<p> Hello, my name is Elena and I am a Computer Science graduate. Recently graduated from John Bryce Academy in Java Spring Boot Applications | React | Single Page Applications (SPA) | MySQL | Cloud Microservices | REST APIs. 
            I am a highly motivated, quick learner and a team player with passion for technology. Background in system administration and manual testing and designing with a record of analytical problem solving.
             </p>
            <p> I develop beautifully simple and complex things and I love what I do.</p>
        <div>{/* <br/> */}
            <p id="education">Education</p>
            <span id="john">John Bryce Academy, Java Full-Stack Course</span><br/>
            <span id="small">Oct 2021 - Aug 2022</span><br/>
            <span id="medium">GRADUATION PROJECT: <a href="https://github.com/ElenaOhana/coupon-system-stage3" target="_blank">
                        <GitHubIcon/>
                        </a></span>
            <section></section>
            <br/>
            <span id="john">The College of Management Academic Studies.<br/>
                 Computer science, Bachelor of Science(BSc) </span><br/>
                 <span id="small">Oct 2012 - Sep 2016</span>
        </div>
        </div>
    );
}

export default About;

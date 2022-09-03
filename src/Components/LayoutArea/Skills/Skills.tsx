import "./Skills.css";

function Skills(): JSX.Element {
    return (
        <div className="Skills">
            <div className="First_div">
                <h4>Programming Languages:</h4>
                <p> Java core, Javascript, Typescript.</p>
                <h4>Framework:</h4>
                <p>Spring Boot. </p>
                <p>  Hibernate (JPA),  REST APIs.</p>

               {/*  <p>Java development of servers using Spring framework, REST Controller API with all business logic and services. familiar with design patterns(MVC, Singleton, factory, proxy, etc), MySQL Database, Authentication and Authorization security features OOP, AOP and more.</p> */}
            </div>
            <div className="Third_div"><h4> My Expertise: </h4><p>Java development of servers using Spring framework, REST Controller API with all business logic and services. I am familiar with design patterns(MVC, Singleton, factory, proxy, etc).</p></div>
            <div className="Fourth_div"><h4> My Expertise: </h4><p>MySQL Database, Authentication and Authorization security features, OOP, AOP, Validation and more.</p></div>

            <div className="Second_div">
                <h4>Techniques:</h4>
                <p>React library, HTML, CSS.<br />
                    Reflection API, Cloud Microservices,<br /> Docker.
                    </p>
                <h4>Relational database: </h4>
                <p>Work with SQL on Mariadb, Workbench and MSSql shells.</p>
            </div>
        </div>
    );
}

export default Skills;

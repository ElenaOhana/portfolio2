import EmailSenderFc from "../../Service/EmailSenderFc/EmailSenderFc";
import "./Contact.css";

function Contact(): JSX.Element {
    return (
        <div className="Contact">
			<EmailSenderFc/>
        </div>
    );
}

export default Contact;

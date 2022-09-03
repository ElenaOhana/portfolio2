import TextField from "@mui/material/TextField/TextField";
import { useForm } from "react-hook-form";
import EmailModel from "./EmailModel";
import "./EmailSenderFc.css";
import emailjs from '@emailjs/browser';
import { Typography } from "@mui/material";
import FeedIcon from '@mui/icons-material/Feed';
import { useNavigate } from "react-router-dom";

function EmailSenderFc(): JSX.Element {
    const navigation = useNavigate();
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<EmailModel>({
        mode: "onTouched"
    });// maybe have to change to Email Model  
    function send(email: EmailModel) {

        var tempParams = {
            from_name: email.from_name,
            to_name: email.to_name,
            message: email.message
        }
        emailjs.send('service_bgqr6s7', 'portfolio', tempParams, 'NJQIRFQ8QZ_4aK5Bk')
            .then(function (res) {
                console.log("success", res.status);
                navigation("/home");
            })
    }
    return (
        <div className="EmailSenderFc Box2">
            <form onSubmit={handleSubmit(send)}>
                <Typography variant="h3" component="h2"> Contact me  <FeedIcon /> </Typography>
                <TextField className="TextField" label="Enter your name" variant="outlined" 
                {...register("from_name", { 
                 required: { value: true, message: 'Input required' },
                 maxLength: { value: 50, message: 'Your initials are too long' } })} />
                <br />
                <span>{errors.from_name?.message}</span>
                <br />
                <br />
                <TextField className="TextField"
                    label="Email or another contact" variant="outlined"
                    {...register("to_name", {
                        required: { value: true, message: "Email is missing" },
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid Email' }
                    })} />
                <br />
                <span>{errors.to_name?.message}</span>
                <br />
                <br />
                <TextField className="TextField"
                    label="Text: max is 500 chars" variant="outlined"
                    {...register("message", {
                        required: true,
                        minLength: { value: 10, message: 'At least 10 characters' },
                        maxLength: { value: 500, message: 'Your message is too long' }
                    })} />
                <br />
                <span>{errors.message?.message}</span>
                <br/>
                <br/>
                <input id="button" type="submit" disabled={!isValid} />
            </form>
        </div>
    );
}


export default EmailSenderFc;

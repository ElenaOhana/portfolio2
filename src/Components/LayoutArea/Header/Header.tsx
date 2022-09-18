import "./Header.css";
import { NavLink } from "react-router-dom";
import { Component, useState } from "react";
import { Button } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GitHubIcon from '@mui/icons-material/GitHub';
import Clock from "../../HeaderArea/Clock/Clock";

function Header(): JSX.Element {

    return (
        <div className="Header">
            <span className="Elena" >Elena Petina</span>
            <NavLink className="HeaderMenu" to="/" >
                <Button  
                    startIcon={<HomeIcon />}>Skills
                </Button>
            </NavLink>

            <NavLink id="about" className="HeaderMenu" to="/about" >
                <Button
                    startIcon={<PermContactCalendarIcon />}>About me
                </Button>
            </NavLink>
            <NavLink id="contact" className="HeaderMenu" to="/contact" >
                <Button
                    startIcon={<EmailIcon />}>Contact
                </Button>
            </NavLink>
            <a id="github" className="HeaderMenu" href="https://github.com/ElenaOhana" target="blank"><Button startIcon={<GitHubIcon />}>github</Button></a>
            <a id="linkedin" className="HeaderMenu" href="https://www.linkedin.com/in/elena-petina-0bb17baa/" target="blank"><Button startIcon={<LinkedInIcon />}>linkedin</Button></a>
            <Clock />
        </div>
    );
}


export default Header;

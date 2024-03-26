import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css';

const Contact = () => {
    const linkedinProfileUrl = "https://www.linkedin.com/in/dinesh-kumar-601126230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    const emailAddress = "dineshkumar93847@gmail.com";
    const whatsappNumber = "9384753302";

    return (
        <Element className='contact' id='contact'>
            <h1>Contact</h1>
            <div className='contact_container'>
                <p>
                    EMAIL : <span>{emailAddress}</span>
                </p>
                <p>
                    WHATSAPP : <span>{whatsappNumber}</span>
                </p>
                {/* <p>
                    Github Username : <span>dineshkumar93847</span>
                </p> */}
                <div className='contact_icons'>
                    <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href={`mailto:${emailAddress}`}>
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                    </a>
                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                        <WhatsAppIcon />
                        </IconButton>
                    </a>
                    {/* Add other social media icons here */}
                </div>
            </div>
        </Element>
    )
}

export default Contact;

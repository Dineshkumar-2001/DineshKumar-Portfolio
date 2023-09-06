import { IconButton } from '@mui/material';
import React from 'react';
import { Element } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Contact.css'

const Contact = () => {
    return (
        <Element className='contact' id='contact'>
            <h1>
                Contact
            </h1>
            <div className='contact_container'>
                <p>
                    Email : <span>dineshkumar93847@gmail.com</span>
                </p>
                <p>
                    Github Username : <span>dineshkumar93847@gmail.com</span>
                </p>
                <div className='contact_icons'>
                    <a href='goole.com'>

                        <IconButton>

                            <LinkedInIcon />
                        </IconButton>
                    </a>
                    <a href='goole.com'>

                        <IconButton>
                            <InstagramIcon />
 
                        </IconButton>
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Contact
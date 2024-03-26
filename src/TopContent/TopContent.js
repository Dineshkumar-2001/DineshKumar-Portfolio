import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
import Resume from '../Resume/dineshkumar.pdf'
import MyImg from '../Images/MyImage5.jpg'

function TopContent() {

    const handleDownload = () => {
        // Define the URL to your PDF file (assuming it's in the public directory)
        const pdfUrl = Resume;

        // Create an anchor element
        const a = document.createElement('a');

        // Set the href attribute to the PDF URL
        a.href = pdfUrl;

        // Specify the download attribute and the file name
        a.download = 'DineshKumar.pdf';

        // Trigger a click event to initiate the download
        a.click();
    };

    return (
        <div className='topContent'>
            {/* <div>
                <img src={MyImg} />
            </div> */}
            <div className='topContent__container'>
                <h4>Hi,It's Me</h4>
                <h2>DINESH KUMAR</h2>
                <h3>And I'm a <span> FRONTEND DEVELOPER </span></h3>
                <h4>From Tamilnadu</h4>
                <p>I have totally 1.5 year experience In <span>FRONTEND DEVELOPER</span> Using <span>REACT TECHNOLOGY</span></p>
                <a href='www.google.com'>

                    <button onClick={handleDownload} className='topContent__downloadButton'>Download CV</button>
                </a>
                <Link to='project' smooth={true} duration={500} >
                    <button className='topContent__workButton'>My Work</button>

                </Link>
            </div>
        </div>
    )
}

export default TopContent
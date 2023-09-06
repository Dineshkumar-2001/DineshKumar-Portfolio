import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
import Resume from '../Resume/dummyResume.pdf'

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
            <div className='topContent__container'>
                <h1>Mr.Dinesh Kumar</h1>
                <p>A Professional Web Developer</p>
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
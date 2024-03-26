import React from 'react';
import { Element } from 'react-scroll';
import Projects from '../projects/Projects';
import './ProjectContainer.css'
import valorImg1 from '../Images/valor-paytech.png'
import valorImg2 from '../Images/Valor_Portal_Image_new_1.png'
import slotBook from '../Images/slot book.jpg'
import employe from '../Images/employe.png'

function ProjectContainer() {
    const client_project = [
      {
        Id : 1,
        img:valorImg1,
         title:'VIRTUAL TERMINAL',
         Desc:'The Friend-to-Friend Product Purchasing System aims to facilitate the process of buying products for friends who are located in different places. If you are away from your current location but wish to buy a product from a local store, you can have your friend purchase it on your behalf. The shopkeeper will then send the payment link to your designated WhatsApp number or email, allowing you to make the payment securely and conveniently.',
         link:'www.google.com'
   } ,
        {
          Id :2 ,
        img:valorImg2,
         title:'MERCHANT BOARDING',
         Desc:'Welcome to our POS Machine Purchase Platform! We specialize in providing reliable Point of Sale (POS) solutions tailored to meet the needs of businesses like yours. Our POS machines are designed to streamline your operations, enhance efficiency, and improve customer service.',
         link:'www.google.com'
   } ,
   {
    Id :3 ,
    img:slotBook,
     title:'EMPLOYE PROJECT ',
     Desc:'Welcome to the Student Education Tracking System, a comprehensive platform designed to monitor and manage student progress and academic performance. Whether you are an educator, administrator, or parent, our system provides the tools you need to support student learning and achievement effectively.',
     link:'www.google.com'
} ,
// {
//   Id : 4,
//     img:employe,
//      title:'STUDENT SLOT BOOKING',
//      Desc:'Checking my project for first time',
//      link:'www.google.com'
// } ,
// {
//   Id : 5,
//     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjIOwpsHlQL8bdYCwqizN4e1ld_qLck5LDu3HZXk_Jw&s',
//      title:'My Project',
//      Desc:'Checking my project for first time',
//      link:'www.google.com'
// } ,
// {
//   Id : 6,
//     img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjIOwpsHlQL8bdYCwqizN4e1ld_qLck5LDu3HZXk_Jw&s',
//      title:'My Project',
//      Desc:'Checking my project for first time',
//      link:'www.google.com'
// } 


]
  return (
    <Element className='projectContainer' id='projects'>

        <h1>PROJECTS</h1>
        {/* <p>I have done for this project</p> */}
        <div className='projectContainer_projects'>
             {
              client_project.map((project,index)=>{
                return(
                  <Projects  key={index} Id={project.Id}  img={project.img} title={project.title} Desc={project.Desc} link={project.link} />
                )
              })
             }
            </div>
    </Element>
  )
}

export default ProjectContainer
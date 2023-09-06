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
         Desc:'Checking my project for first time',
         link:'www.google.com'
   } ,
        {
          Id :2 ,
        img:valorImg2,
         title:'VALOR CONNECT API',
         Desc:'Checking my project for first time',
         link:'www.google.com'
   } ,
   {
    Id :3 ,
    img:slotBook,
     title:'EMPLOYE PROJECT ',
     Desc:'Checking my project for first time',
     link:'www.google.com'
} ,
{
  Id : 4,
    img:employe,
     title:'STUDENT SLOT BOOKING',
     Desc:'Checking my project for first time',
     link:'www.google.com'
} ,
{
  Id : 5,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjIOwpsHlQL8bdYCwqizN4e1ld_qLck5LDu3HZXk_Jw&s',
     title:'My Project',
     Desc:'Checking my project for first time',
     link:'www.google.com'
} ,
{
  Id : 6,
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjIOwpsHlQL8bdYCwqizN4e1ld_qLck5LDu3HZXk_Jw&s',
     title:'My Project',
     Desc:'Checking my project for first time',
     link:'www.google.com'
} 


]
  return (
    <Element className='projectContainer' id='projects'>

        <h1>PROJECTS</h1>
        <p>I have done for this project</p>
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
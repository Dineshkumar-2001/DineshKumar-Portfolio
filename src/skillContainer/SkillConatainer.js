import React from 'react'
import { Element } from 'react-scroll';
import Image from '../Images/MyImage3.jpg'
import LinearProgress from '@mui/material/LinearProgress';
import './skillConatainer.css'

const SkillConatainer = () => {
  return (
    <Element className="skillContainer" id='skill'>
        {/* <div className='skillContainer__image'>
<img src={Image} alt=''/>
< /div> */}
<div className='skillContainer__image'>
<img src={Image} alt=''/>
    </div>
<div className='skillContainer__text'>
    <h2>SKILLSET</h2>
    <div className='skillContainer__skillSet'>
       <h5>HTML</h5>
       <div className='skillContainer__slider skillContainer__slider1 '>
          <LinearProgress variant='determinate' value={90} />

       </div>
    </div>

    <div className='skillContainer__skillSet'>
       <h5>CSS</h5>
       <div className='skillContainer__slider skillContainer__slider2 '>
          <LinearProgress variant='determinate' value={75} />

       </div>
    </div>


    <div className='skillContainer__skillSet'>
       <h5>Java Script</h5>
       <div className='skillContainer__slider skillContainer__slider3 '>
          <LinearProgress variant='determinate' value={80} />

       </div>
    </div>


    <div className='skillContainer__skillSet'>
       <h5>React JS </h5>
       <div className='skillContainer__slider skillContainer__slider4 '>
          <LinearProgress variant='determinate' value={90} />

       </div>
    </div>



    <div className='skillContainer__skillSet'>
       <h5>NODE JS</h5>
       <div className='skillContainer__slider skillContainer__slider5 '>
          <LinearProgress variant='determinate' value={50} />

       </div>
    </div>


    <div className='skillContainer__skillSet'>
       <h5>SQL</h5>
       <div className='skillContainer__slider skillContainer__slider6 '>
          <LinearProgress variant='determinate' value={60} />

       </div>
    </div>

    <div className='skillContainer__skillSet'>
       <h5>MONGO DB</h5>
       <div className='skillContainer__slider skillContainer__slider6 '>
          <LinearProgress variant='determinate' value={60} />

       </div>
    </div>


    </div>

   

   

   

   

    

{/* </div> */}
{/* < /div> */}
{/* </div> */}


    </Element>
  )
}

export default SkillConatainer
import React from 'react';
import './intro.css';
import bg from '../../Assets/image1.png';
import btnImg from '../../Assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Soura</span><br/>Software Engineer</span>
            <p className='introPara'>An intrigue website developer with experience in creating <br/> software designs and software testing</p>
            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg' />Hire Me</button></Link>
        </div>
        <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro;
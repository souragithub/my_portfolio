import React from 'react'
import './skills.css';
import UIDesign from '../../Assets/ui-design.png';
import WebDesign from '../../Assets/website-design.png';
import AppDesign from '../../Assets/app-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>An intrigue website developer with experience in creating
software designs and software testing</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
                <div className='skillsBarText'>
                    <h2>UI/UX Design</h2>
                    <p>Good design is about the process not the product</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="webDesign" className='skillBarImg'/>
                <div className='skillsBarText'>
                    <h2>Website Design</h2>
                    <p>Web design is not just about creating pretty layouts. It's about understanding the marketing challenge behind your business </p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="appDesign" className='skillBarImg'/>
                <div className='skillsBarText'>
                    <h2>App Design</h2>
                    <p>The future of mobile is the future of everything.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
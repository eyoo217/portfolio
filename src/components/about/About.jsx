import React from 'react'
import './about.css'
import ME from '../../asset/aboutme.jpg'
import {BiCertification} from 'react-icons/bi'
import {MdOutlineSchool} from 'react-icons/md'
import {FaSchool} from 'react-icons/fa'



const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BiCertification className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Coding  Advanced App Development and APCSA </small>
            </article>
            <article className='about__card'>
              <MdOutlineSchool className='about__icon'/>
              <h5>GPA</h5>
              <small>3.6 GPA, National Honor Society, Honor Roll</small>
            </article>
            <article className='about__card'>
              <FaSchool className='about__icon'/>
              <h5>Education</h5>
              <small>Niles North High School  Attending Uni. in Fall of 2023</small>
            </article>
          </div>
          <p>
                hi my name is elliott, i am 17 years old and a senior in highschool currently.
                i am interested in UX/UI design as well as software engineering and computer
                science. i plan to attend university in fall of 2023 for computer science.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
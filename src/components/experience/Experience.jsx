import React from 'react'
import './experience.css'
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Software Skills</h3>
            <article className='experience__details'>
            < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              < IoIosCheckmarkCircleOutline className='epxerience__details-icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience
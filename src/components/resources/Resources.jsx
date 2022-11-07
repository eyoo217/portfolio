import React from 'react'
import './resources.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {SiCsswizardry} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/ri'
import {FaReact} from 'react-icons/fa'

const resources = () => {
  return (
    <section id='resources'>
      <h2>About This Website</h2>

      <div className="container resources__container">
        <div className="langText">
        <h3>Languages / Tools Used</h3>
        </div>
        <div className="resource__content">
          <article className='resource__details'>
            <AiOutlineHtml5 />
            <h4>HTML</h4>
            <small className='text-light'>Base Design</small>
          </article>
          <article className='resource__details'>
            <SiCsswizardry />
            <h4>CSS</h4>
            <small className='text-light'>UI/UX Design</small>
          </article>
          <article className='resource__details'>
            <SiJavascript />
            <h4>JavaScript</h4>
            <small className='text-light'>Base Code</small>
          </article>
          <article className='resource__details'>
            <RiReactjsFill />
            <h4>react.JS</h4>
            <small className='text-light'>Library for JS</small>
          </article>
          <article className='resource__details'>
            <FaReact />
            <h4>React Icons</h4>
            <small className='text-light'>Icon Library</small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default resources
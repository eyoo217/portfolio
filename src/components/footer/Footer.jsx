import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>elotmusk</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/yungelot"><BsInstagram/></a>
        <a href="https://github.com/eyoo217"><AiOutlineGithub /></a>
        <a href="https://www.linkedin.com/in/elotmusk/"><AiOutlineLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ELOTMUSK. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer
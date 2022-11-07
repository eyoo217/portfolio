import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/elotmusk" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/eyoo217" target="_blank"><AiOutlineGithub /></a>
        <a href="https://www.instagram.com/yungelot/" target="_blank"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials
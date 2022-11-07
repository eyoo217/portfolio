import React from 'react'
import './portfolio.css'
import IMG1 from '../../asset/portfolioimg1.PNG'
import IMG2 from '../../asset/portfolioimg2.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Don Yume Website',
    github: 'https://github.com/eyoo217/don-yume',
    demo: 'https://donyumes.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ASCII Terminal Art',
    github: 'https://github.com/eyoo217/Terminal-ASCII-Art-Header-Tutorial',
    demo: 'https://github.com/eyoo217/Terminal-ASCII-Art-Header-Tutorial'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo}) => {
              return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='blank'>Site</a>
              </div>
            </article>
            )

            })
          }
        </div>
  </section>  
    )
}

export default Portfolio
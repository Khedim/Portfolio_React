import { useState, useEffect } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faHtml5, faCss3, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import './About.scss'

export const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
    }
    return () => (isMounted = false)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eligendi tempora maiores quidem veritatis eos saepe suscipit placeat,
          minus sunt, aliquam sapiente natus repudiandae reprehenderit amet
          reiciendis, non quo et?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eligendi tempora maiores quidem veritatis eos saepe suscipit placeat,
          minus sunt, aliquam sapiente natus repudiandae reprehenderit amet
          reiciendis, non quo et?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          eligendi tempora maiores quidem veritatis eos saepe suscipit placeat,
          minus sunt, aliquam sapiente natus repudiandae reprehenderit amet
          reiciendis, non quo et?
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#3471a3" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

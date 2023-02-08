import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo.js'
import './Home.scss'
import Loader from 'react-loaders'

export const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'h', 'e', 'd', 'i', 'm']
  const jobArray = ['F', 'u', 'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }
    return () => (isMounted = false)
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /><br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={16} />
        </h1>
        <h2>Full Stack Developer | React | Django</h2>
        <Link to='/#' className='flat-button'>CONTACT ME</Link>
      </div>
      <Logo />
    </div>
    <Loader type='pacman' />
    </>
  )
}

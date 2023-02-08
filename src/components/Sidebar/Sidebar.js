import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
import './Sidebar.scss'

export const Sidebar = () => <div className='nav-bar'>
    <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSub} alt="slobodan" className='sub-logo' />
    </Link>
    <nav>
        <NavLink axact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink axact="true" activeclassname="active" to="/about" className="about-link">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink axact="true" activeclassname="active" to="/contact" className="contact-link">
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
    </nav>
    <ul>
        <li>
            <a
                target="blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/oussama-khedim-131aba208/"
            ><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /></a>
        </li>
        <li>
            <a
                target="blank"
                rel="noreferrer"
                href="https://github.com/Khedim"
            ><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
        </li>
        <li>
            <a
                target="blank"
                rel="noreferrer"
                href="https://join.skype.com/invite/HwYqLYQltXcf"
            ><FontAwesomeIcon icon={faSkype} color="#4d4d4e" /></a>
        </li>
    </ul>
</div>
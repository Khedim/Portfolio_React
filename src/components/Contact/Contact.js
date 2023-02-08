import { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Contact.scss'

export const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'gmail',
      '{your key}',
      refForm.current,
      '{Your Token}'
    ).then(
      () => {
        alert('Message successfuly sent!')
        window.location.reload(false)
      },
      () => alert('Faild to send the message, Please try again')
    )
  }

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
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi tempora maiores quidem veritatis eos saepe suscipit
            placeat, minus sunt, aliquam sapiente natus repudiandae
            reprehenderit amet reiciendis, non quo et?
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Khedim Oussama,
          <br />
          Algeria,
          <br />
          Hai Pont Albin <br />
          Oran Oran <br />
          <br />
          <span>oussamakhedim79@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.705023, -0.631694]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.705023, -0.631694]}>
              <Popup>Khedim lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

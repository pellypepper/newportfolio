import {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Home() {
    const text = "FRONT END DEVELOPER";
    const [characters, setCharacters] = useState([]);
  
    useEffect(() => {
        const charactersArray = text.split('').map((char, index) => ({
          
        id: index,
        char: char === ' ' ? '\u00A0' : char, 
        delay: `${index * 0.1}s`, // Adjust delay between each letter
      }));
      setCharacters(charactersArray);
    }, []);
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-text">
          <h5>Hi, It's Me</h5>
          <h1>PELLY PEPPER</h1>
          <h5>I'm a <span className="text-animation"> {characters.map(({ id, char, delay }) => (
              <span key={id} style={{ '--i': id, '--delay': delay }}>{char}</span>
            ))}</span></h5>
         

          <span className='home-text-middle'>High level experience in web design and development producing quality work</span>

          <div className="home-icon">
          <a href='https://www.linkedin.com/in/pelumi-otegbola-a139a7305/'><FontAwesomeIcon className='icons' icon={faLinkedin} style={{ color: ' rgb(16, 146, 169);' }} size="2x" /></a>  
          <a  href="https://www.instagram.com/iamdjppeliance" target="_blank" rel="noopener noreferrer">  <InstagramIcon className='icons' fontSize="large" style={{ color: ' rgb(16, 146, 169);' }} /></a>
           <a href='https://www.tiktok.com/@pellypepper1'> <FontAwesomeIcon className='icons' icon={faTiktok} style={{ color: ' rgb(16, 146, 169);' }} size="2x" /> </a>
           
          </div>

          <button>Hire Me</button>
        </div>

        <div className='home-image-container'>
         
        </div>
      </div>
    </div>
  );
}

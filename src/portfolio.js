
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <div className="portfolio-wrapper">

                <h1>Normal Website</h1>
                <div className='normal-web-container'>
                    <div className='portfolio-box code1'>



                        <p>E-commerce Website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/e-commerce" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://pellye-commerce.netlify.app/e-commerce" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>
                    <div className='portfolio-box code2'>



                        <p>Portfolio Website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/portfolio" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://pellyportfolio.netlify.app/portfolio" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>

                    <div className='portfolio-box code3'>



                        <p>Puzzle Game Website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/puzzle game" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://main--pellypuzzle.netlify.app/puzzle game" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>



                </div>

                <h1>React Website</h1>
                <div className='  react-web-container'>
                    <div className='portfolio-box code4'>



                        <p>My Mobile Banking website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/banking-app" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://pellyportfolio.netlify.app/portfolio" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>
                    <div className='portfolio-box code5'>



                        <p>New Portfolio Website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/newportfolio" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://pellynewportfolio.netlify.app" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>

                    <div className='portfolio-box code6'>



                        <p>First React Website</p>

                        <div className='portfolio-btn'>
                            <a href="https://github.com/pellypepper/firstreactwork" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: 'white' }} /></a>
                            <Link href="https://main--pellyfirstreactwork.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <LaunchIcon fontSize="large" style={{ color: 'white' }} />
                            </Link>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    )
}
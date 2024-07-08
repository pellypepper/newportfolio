import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAt } from '@fortawesome/free-solid-svg-icons';
export default function Contact (){
    return(
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <div className="left-box">
                        
                    <PhoneIcon fontSize="small" style={{ color: 'var(--box-shadow)' }}  />
                        <div className="left-text">
                           <h5>Call Me</h5>
                           <span>07542955386</span>
                        </div>
                    </div>

                    <div className="left-box">
                        
                        <FontAwesomeIcon icon={faAt} fontSize="large" style={{ color: 'var(--box-shadow)' }}  />
                            <div className="left-text">
                               <h5>Email</h5>
                               <span>ppeliance@gmail.com</span>
                            </div>
                        </div>


                    <div className="left-box">
                        
                        <FontAwesomeIcon icon={faHome}  fontSize="large" style={{ color: 'var(--box-shadow)' }} />
                            <div className="left-text">
                               <h5>Location</h5>
                               <span>07542955386</span>
                            </div>
                        </div>

                </div>

                <div className='contact-right'>
                    <input placeholder='Name' type='text'/>
                    <input placeholder='Email' type='email'/>
                    <input placeholder='Project' type='text'/>
                    <textarea placeholder='Message' />
                    <button>Send Message</button>

                </div>

            </div>

        </div>
    )
}
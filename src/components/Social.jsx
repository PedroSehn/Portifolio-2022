import '../styles/Social.scss';

import git from '../assets/images/git-icon.svg';
import instagram from '../assets/images/instagram-logo.svg';
import linkedin from '../assets/images/linkedin-icon.svg';
import curriculo from '../assets/images/curriculo.svg'
import whatsapp from '../assets/images/wpp-icon.svg'

function Social (){
    return (
            <div className='social-icons'> 
               <a href='https://github.com/PedroSehn' target='_blank'>
                  <img src={git} alt='github' className='social-icon'/>
               </a>
               <a href='https://www.instagram.com/pedro.shu/' target='_blank'>
                  <img src={instagram} alt='instagram' className='social-icon'/>
               </a>
               <a href='https://www.linkedin.com/in/pedrosehn/' target='_blank'>
                  <img src={linkedin} alt='linkedin' className='social-icon'/>
               </a>
               <a href='https://wa.me/5551984574823' target='_blank'> 
                  <img src={whatsapp} alt='whatsapp' className='social-icon'/>
               </a>
            </div>
            )
}

export default Social;
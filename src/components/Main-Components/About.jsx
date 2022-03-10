import '../../styles/About.scss'
import Photo from '../../assets/images/pedrinho.png'

import GitHub from '../../assets/images/git-icon.svg'
import Instagram from '../../assets/images/instagram-logo.svg'
import Linkedin from '../../assets/images/linkedin-icon.svg'


function About() {
    return(
        <section className='about-content'>
                <div className='photo-container' > 
                <div className='first-container'>
                    <div className='title'>
                        <span> Sobre </span>
                    </div>
                    
                    <div className='text'>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    </div>
                    <div className='social'>
                        <a href='https://github.com/PedroSehn' target='_blank'>
                            <img src={GitHub} alt='GitHub' className='socialButtons'/>
                        </a>
                        <a href='https://www.instagram.com/pedro.shu/' target='_blank'>
                            <img src={Instagram} alt='Instagram' className='socialButtons'/>
                        </a>
                        <a href='https://www.linkedin.com/in/pedrosehn/' target='_blank'>
                            <img src={Linkedin} alt='Linkedin' className='socialButtons'/>
                        </a>
                        
                    </div>
                </div>
                    <div className='second-container'>
                        <img src={Photo} alt='ilustracao' className='photo' />
                        <p className='name'>Pedro Sehn</p>
                        <p className='description'>Desenvolvedor Web</p>
                    </div>
                </div>
        </section>
    )
}

export default About;
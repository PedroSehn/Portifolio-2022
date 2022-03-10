import '../../styles/Projects.scss';
import ProjectCard from '../Projects-Components/Project-Card.jsx';

import gameIcon from '../../assets/images/game-icon.svg';
import instagramClone from '../../assets/images/Instagram_clone.svg'
import databaseIcon from '../../assets/images/database.svg';
import baker from '../../assets/images/beaker.svg';
import inProgress from '../../assets/images/in_progress.svg'
import javaProj from '../../assets/images/java_proj.svg'
function Projects(){
    return(
        
        <div className='projects-content'>
            <div className='projects'> 
                <div className='icons'>
                    <a href='https://github.com/PedroSehn/Godot_Pong' target='_blank'>
                        <ProjectCard name='Pong Game' img={gameIcon}/>
                    </a>
                    
                    <a href='https://pedrosehn.github.io/instagram-clone/' target='_blank'> 
                        <ProjectCard name='Instagram Clone' img={instagramClone}/>
                    </a>

                </div>
                <div className='icons'>
                    <ProjectCard name='Blogs API' img={databaseIcon}/>
                    
                    <a href='https://github.com/PedroSehn/pixel-art-project' target='_blank'>
                        <ProjectCard name='Pixel Art Editor' img={baker}/>  
                    </a>
                    
                </div>
                <div className='icons'>
                    <a href='https://github.com/PedroSehn/Projeto-Signos-Java' target='_blank'>
                        <ProjectCard name='Java Signos' img={javaProj}/>
                    </a>
                    <ProjectCard name='Em Progresso' img={inProgress}/>  
                </div> 

            </div>
            
            
            <div className='descripition'>
                <div className='title'> 
                    <span> Projects </span> 
                </div>
                <div className='text'> 
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                </div>
            </div>

        </div>
    )
};

export default Projects;
import '../../styles/Projects.scss';
import ProjectCard from '../Projects-Components/Project-Card.jsx';

import gameIcon from '../../assets/images/game-icon.svg';
import instagramClone from '../../assets/images/Instagram_clone.svg'
import databaseIcon from '../../assets/images/database.svg';
import baker from '../../assets/images/beaker.svg';
import inProgress from '../../assets/images/in_progress.svg'
import javaProj from '../../assets/images/java_proj.svg'
import git from '../../assets/images/git-icon.svg';

function Projects(){
    return(
        
        <div className='projects-content'>
            <div className='projects'> 
                <div className='icons'>
                    <a href='https://pedrosehn.github.io/instagram-clone/' target='_blank'> 
                        <ProjectCard name='Clone Instagram' img={instagramClone}/>
                    </a>

                    <a href='https://github.com/PedroSehn/Godot_Pong' target='_blank'>
                        <ProjectCard name='Jogo de Pong' img={gameIcon}/>
                    </a>

                </div>
                <div className='icons'>
                    <ProjectCard name='Blogs API' img={databaseIcon}/>
                    
                    <a href='https://github.com/PedroSehn/pixel-art-project' target='_blank'>
                        <ProjectCard name='Editor Pixel Art' img={baker}/>  
                    </a>
                    
                </div>
                <div className='icons'>
                    <a href='https://github.com/PedroSehn/Projeto-Signos-Java' target='_blank'>
                        <ProjectCard name='Java Signos' img={javaProj}/>
                    </a>
                    <a href='https://github.com/PedroSehn' target='_blank'>
                    <ProjectCard name='Outros Projetos' img={git}/>  
                    </a>
                    
                </div> 

            </div>
        
            <div className='descripition'>
                <div className='title'> 
                    <span> Projetos </span> 
                </div>
                <div className='text'> 
                    <p>
                        Aqui alguns dos principais projetos que eu desenvolvi,
                        mais projetos podem ser encontrados na minha pagina do Github.
                    </p>
                    <p>
                        Os projetos desta sessão foram desenvolvidos em várias tecnologias diferentes,
                        indo de Java, Javascript, até SQL, Sequelize.
                    </p>
                    <p>
                    O primeiro projeto da lista, Clone Instagram está colorido, 
                    pois, é o projeto do qual mais tenho orgulho, 
                    fiquei super satisfeito com o resultado e já planejo uma versão completa do site 😁.
                    </p>
                </div>
            </div>

        </div>
    )
};

export default Projects;
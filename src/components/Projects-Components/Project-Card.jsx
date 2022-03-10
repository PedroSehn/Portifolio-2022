import '../../styles/project-cards.scss'


function ProjectCard(props) {
      const { name, img } = props;
    
    return(
            <div className='project-card'> 
                <div className='card-img-container'>
                    <img src={img} alt={`${name} icon`} className='card-img'/>
                </div>
                
                <span className='card-name'> {name} </span>
                <div> </div>
            </div>
        )
};

export default ProjectCard;
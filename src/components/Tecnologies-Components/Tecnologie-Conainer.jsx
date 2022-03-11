import '../../styles/TecContainer.scss'

function TecContainer (props){
    const {img, name} = props;
    
    return(
        <div className="tec-container"> 
            <img src={img} alt={`${name} icon`} className='tec-img'/>
         </div>
    )
}

export default TecContainer;

//TODO IMPORTAR TODOS OS ICONES NO TECNOLOGIES E CRIAR COMPONENTS AQUI
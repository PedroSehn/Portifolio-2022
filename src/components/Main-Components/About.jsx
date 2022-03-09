import '../../styles/About.scss'
import Photo from '../../assets/images/pedrinho.png'
function About() {
    return(
        <section className='about-content'>
            <div className='text'>
                <h2> Sobre </h2>
                <p> Olá, meu nome é Pedro e eu sou um desenvolverdor web, desenvolvendor de jogos e consumidor de café. 😁 </p>
                <p> Comecei minha jornada em programação na adolecencia, quando fiz um curso de Python por curiosidade e acabei me apaixonando por isso,
                    desde então venho estudando diversas linguagens, como C#, Java, Javascript além de estudar conceitos de desenvolvimento de jogos como hobby.
                </p>
            </div>
            <div className='photo-container' > 
                <img src={Photo} alt='ilustracao' className='photo' />
                <div> CONTENT </div>
            </div>
        </section>
    )
}

export default About;
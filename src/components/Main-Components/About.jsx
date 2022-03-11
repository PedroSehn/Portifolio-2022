import '../../styles/About.scss'
import Photo from '../../assets/images/pedrinho.png'

function About() {
    return(
        <section className='about-content'>
                <div className='photo-container' > 
                <div className='descripition'>
                    <div className='title'>
                        <span> Sobre </span>
                    </div>
                    
                    <div className='text'>
                    <p>
                       Olá, eu sou Pedro, desenvolvedor Web fullstack e desenvolvedor de Jogos nas horas vagas.
                    </p>
                    <p>
                        Comecei na minha jornada na programação aos 13 anos, em busca de aprender a desenvolver meus próprios Jogos e com o tempo acabei pegando gosto pela coisa e desde então, estou estudando tecnologia. 
                    </p>
                    <p>
                        Atualmente, estou cursando Desenvolvimento Web Full Stack na Trybe, e no futuro, pretendo cursar
                        Desenvolvimento de Jogos ou Segurança da Informação.
                    </p>
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
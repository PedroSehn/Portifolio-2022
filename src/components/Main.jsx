import '../styles/Main.scss';

import About from './Main-Components/About';
import Projects from './Main-Components/Projects'
import Tecnologies from './Main-Components/Tecnologies';

function Main(){
    return(
        <main className='main-content'>
            <About className='component'/>
            <Projects className='component' />
            <Tecnologies className='component' />
        </main>
    )
}

export default Main;
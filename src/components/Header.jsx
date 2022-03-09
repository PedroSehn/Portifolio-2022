import '../styles/header.scss';

function Header(){
    return(  
        <header className='main-header'> 
            <nav className='navigation'> 
                <div className='navigation-items'> Sobre </div>
                <div className='navigation-items'> Projetos </div>
                <div className='navigation-items'> Sobre </div>
            </nav>
        </header>
    );
};

export default Header;
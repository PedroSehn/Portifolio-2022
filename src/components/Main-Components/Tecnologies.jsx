import '../../styles/Tecnologies.scss'
import TecContainer from '../Tecnologies-Components/Tecnologie-Conainer'

import docker from '../../assets/images/tecnologies/docker-plain-wordmark.svg'
import css from '../../assets/images/tecnologies/css3-plain.svg'
import js from  '../../assets/images/tecnologies/javascript-plain.svg'
import html from  '../../assets/images/tecnologies/html5-plain.svg'
import react from '../../assets/images/tecnologies/react-original-wordmark.svg'
import linux from '../../assets/images/tecnologies/linux-plain.svg'
import git from    '../../assets/images/tecnologies/git-plain.svg'
import redux from '../../assets/images/tecnologies/redux-original.svg'
import sql from  '../../assets/images/tecnologies/mysql-plain-wordmark.svg'
import mongo from '../../assets/images/tecnologies/mongodb-plain-wordmark.svg'
import nodejs from '../../assets/images/tecnologies/nodejs-plain.svg'
import jest from '../../assets/images/tecnologies/jest-plain.svg'
import express from '../../assets/images/tecnologies/express-original-wordmark.svg'
import heroku from '../../assets/images/tecnologies/heroku-plain-wordmark.svg'
import sequelize from '../../assets/images/tecnologies/sequelize-plain.svg'

import csharp from '../../assets/images/tecnologies/csharp-plain.svg'
import godot from '../../assets/images/tecnologies/godot-original.svg'
import java from '../../assets/images/tecnologies/java-plain-wordmark.svg'
import python from '../../assets/images/tecnologies/python-original.svg'
import sass from '../../assets/images/tecnologies/sass-original.svg'
import typescript from '../../assets/images/tecnologies/typescript-plain.svg'

function Tecnologies(){
    return (
        <div className="tecnologies-content">
            <div className='descripition'> 
                <div className='title'>
                    <span> Tecnologias </span>
                </div>
               
                <div className='text'>
                    <p>
                        Aqui, uma breve listagem das principais tecnologias que tenho conhecimento.
                    </p>
                    <p>
                    A ideia dessa sessão é não apenas mostrar como tenho conhecimento em várias tecnologias diferentes, mas também, mostrar como tenho interesse em novas tecnologias.
                    </p>
                </div>
            </div>
            <div className='tecnologies'> 
                <div className='principal-stack'>
                    <div className='icons'> 
                      <TecContainer name='css' img={css}/>
                      <TecContainer name='javascript' img={js}/>
                      <TecContainer name='HTML' img={html}/>
                      <TecContainer name='react' img={react}/>
                      <TecContainer name='linux' img={linux}/>
                      <TecContainer name='git' img={git}/>
                       
                    </div>
                    <div className='icons'> 
                      <TecContainer name='sql' img={sql}/>
                      <TecContainer name='nodejs' img={nodejs}/>
                      <TecContainer name='jest' img={jest}/>
                      <TecContainer name='redux' img={redux}/>
                      <TecContainer name='express' img={express}/>
                      
                    </div>
                </div>
                <div className='secondary-stack'>
                    <div className='icons'> 
                        <TecContainer name='mongo' img={mongo}/>
                        <TecContainer name='docker' img={docker}/>
                        <TecContainer name='csharp' img={csharp}/>
                        <TecContainer name='godot' img={godot}/>
                        <TecContainer name='java' img={java}/>
                    </div>

                    <div className='icons'> 
                        <TecContainer name='python' img={python}/>
                        <TecContainer name='sass' img={sass}/>
                        <TecContainer name='typescript' img={typescript}/>
                        <TecContainer name='sequelize' img={sequelize}/>
                        <TecContainer name='heroku' img={heroku}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tecnologies
import style from './Cabecalho.module.css';

import { Link } from 'react-router-dom'

const Cabecalho = () => {
    return(
        <>
            <div className={style.Cabecalho} >
                <Link to='/' >
                    <h1>JOGO DA VELHA</h1>
                </Link>
                <Link to='/sobre-o-projeto'>
                    <p>Sobre o Projeto</p>
                </Link>
                
            </div>
        </>
    )
}

export {Cabecalho}
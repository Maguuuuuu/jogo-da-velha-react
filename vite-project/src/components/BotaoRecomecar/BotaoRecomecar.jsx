import style from './BotaoRecomecar.module.css'

import { useAppContext } from "../../hooks";

const BotaoRecomecar = ({jogadorDaVez}) => {

    const {recomecar} = useAppContext();

    return (
        <button 
        className={style.BotaoRecomecar}
        onClick={recomecar}
        >
            Recomeçar
        </button>
    );
};

export { BotaoRecomecar };
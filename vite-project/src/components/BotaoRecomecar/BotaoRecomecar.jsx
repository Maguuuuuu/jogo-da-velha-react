import style from './BotaoRecomecar.module.css'
import { useAppContext } from "../../hooks";
import { useNavigate } from "react-router-dom";



const BotaoRecomecar = ({onClickRecomecar}) => {
    
    const navigate = useNavigate();
      
        const reloadPage = () => {
          navigate(0); // Recarrega a página
        };

    return (
        <button 
        className={style.BotaoRecomecar}
        onClick={reloadPage}
        >
            Recomeçar
        </button>
    );
};

export { BotaoRecomecar };
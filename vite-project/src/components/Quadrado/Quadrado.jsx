
import style from './Quadrado.module.css'

const Quadrado = ({valor, onclickQuadrado}) => {

    return (
        <button className={style.Quadrado} onClick={onclickQuadrado}>
            {valor}
        </button>
    )
};

export {Quadrado}
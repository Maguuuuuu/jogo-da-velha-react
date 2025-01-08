import { Conteudo } from "../Conteudo";
import { Quadrado } from "../Quadrado";
import { useAppContext } from "../../hooks";
import { MensagemVencedor } from "../MensagemVencedor";
import style from './Tabela.module.css'


const Tabela = () => {

    const { valorX, setValorX, quadrados, setQuadrados, calcularVencedor, verificarVelha} = useAppContext();

    const handleClick = (i) => {

        if (quadrados[i] || calcularVencedor(quadrados)) {
            return;
        }

        const jogada = quadrados.slice()
        if(valorX){
            jogada[i]='X';
        } else {
            jogada[i]='O';
        };

        setQuadrados(jogada)
        setValorX(!valorX)
    };

    const vencedor = calcularVencedor(quadrados)
    const deuVelha = verificarVelha(quadrados)
    

    return (
        <>

        <div className={style.Tabela}>

        {!vencedor &&
            <Conteudo jogadorDaVez={valorX? 'X':'O'}/>
        }
        
        
        <div >
            <Quadrado onclickQuadrado={() => handleClick(0)} valor={quadrados[0]}/>
            <Quadrado onclickQuadrado={() => handleClick(1)} valor={quadrados[1]}/>
            <Quadrado onclickQuadrado={() => handleClick(2)} valor={quadrados[2]}/>
        </div>
        <div>
            <Quadrado onclickQuadrado={() => handleClick(3)} valor={quadrados[3]}/>
            <Quadrado onclickQuadrado={() => handleClick(4)} valor={quadrados[4]}/>
            <Quadrado onclickQuadrado={() => handleClick(5)} valor={quadrados[5]}/>
        </div>
        <div>
            <Quadrado onclickQuadrado={() => handleClick(6)} valor={quadrados[6]}/>
            <Quadrado onclickQuadrado={() => handleClick(7)} valor={quadrados[7]}/>
            <Quadrado onclickQuadrado={() => handleClick(8)} valor={quadrados[8]}/>
        </div>
        {(vencedor && !deuVelha)  && (
            <MensagemVencedor jogadorDaVez={ vencedor==="X" ? 'X' : 'O'} /> 
        )}
        {deuVelha && <h2>Deu velha!</h2>}

        </div>
        </>
    );
};

export {Tabela};
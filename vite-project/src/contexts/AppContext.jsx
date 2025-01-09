import { createContext, useState } from "react";



export const AppContext = createContext({});

export const  AppContextProvider = (props) => {
    const { children } = props;

    const [quadrados, setQuadrados] = useState(Array(9).fill(null))
    const [valorX, setValorX] = useState(true)    

    const calcularVencedor = (quadrados) => {
        const combinacoes = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < combinacoes.length; i++) {
          const [a, b, c] = combinacoes[i];
          if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
            return quadrados[a]; 
          };
        };
        return null;
      };

    
      const verificarVelha = (quadrados) => {
        const venceu = calcularVencedor(quadrados)
        if (venceu && quadrados.every((quadrado) => quadrado !== null)){
            return true
        }
          };

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
      
          

      const recomecar = () => {
        setQuadrados('')

      }


    return (
        <AppContext.Provider value={{
            calcularVencedor,
            quadrados,
            setQuadrados,
            valorX,
            setValorX,
            verificarVelha,
            recomecar,
            handleClick,
            }}>
            {children}
        </AppContext.Provider>
    )
}

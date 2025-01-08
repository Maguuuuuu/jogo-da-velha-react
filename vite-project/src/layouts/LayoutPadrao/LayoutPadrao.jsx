import { Outlet } from "react-router-dom";
import { Conteudo, Tabela, Rodape, Cabecalho } from "../../components";
import { useAppContext } from "../../hooks";

import style from './LayoutPadrao.module.css'

const LayoutPadrao = () => {
    return (
        <>
            <div className={ style.LayoutPadrao }>
            <Outlet/>
            </div>
            
            
        </>
    );
};

export { LayoutPadrao }
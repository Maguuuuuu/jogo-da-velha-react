import { Cabecalho } from "../../components";

import style from './SobreOProjeto.module.css'

const SobreOProjeto = () => {
    return (
        <>
        <Cabecalho/>
        <div className={ style.SobreOProjeto }>
            <p>O projeto Jogo da Velha foi desenvolvido em React com o objetivo de aprofundar conceitos específicos da biblioteca, como props, useState, useContext, createContext, Router, entre outros. Além disso, o projeto serviu para exercitar a lógica de programação e concluir um desafio proposto no curso Descomplica VNT: criar um jogo da velha funcional.</p>
        </div>
        
        </>
    );
};

export { SobreOProjeto }
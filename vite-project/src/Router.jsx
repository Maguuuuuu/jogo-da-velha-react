import {Routes, Route} from 'react-router-dom'

import { Inicial, SobreOProjeto, Erro404 } from './pages'

import { LayoutPadrao } from './layouts/LayoutPadrao/LayoutPadrao'

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao/>}>
                <Route path='/' element={<Inicial/>} />
                <Route path='/sobre-o-projeto' element={<SobreOProjeto/>} />
                <Route path= "*" element={<Erro404/>} />
            </Route>
        </Routes>
    )
}

export { Router }
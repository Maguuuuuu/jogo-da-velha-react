
import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { Router } from './Router'
import { Cabecalho, Tabela, Rodape } from './components';
import { AppContextProvider } from './contexts';
import { useAppContext } from './hooks';
import { useNavigate } from "react-router-dom";


const App = () =>  {


  return(
    <AppContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContextProvider>
      
   
  )
};

export default App


import { BrowserRouter } from 'react-router-dom';
import './App.css'

import { Router } from './Router'
import { Cabecalho, Tabela, Rodape } from './components';
import { AppContextProvider } from './contexts';
import { useAppContext } from './hooks';



const App = () =>  {
  return(
    // return (
    //   <AppContextProvider>
    //     <BrowserRouter>
    //       <Router />
    //     </BrowserRouter>
    //   </AppContextProvider>
      
    // );

    // 
    <AppContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContextProvider>
      
   
  )
};

export default App

import './App.css';
import Navbar from './components/NavBar/Navbar';
import { createContext } from 'react'

function App(){

  const AppContext = createContext();

  return (
    <>
    <AppContext.Provider>
      <Navbar />
      
    </AppContext.Provider>

    </>
  );
}
export default App;

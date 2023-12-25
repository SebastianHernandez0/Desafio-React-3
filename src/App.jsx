import { useState } from 'react'
import './App.css'
import { BaseColaboradores } from './components/data/BaseColaboradores'
import Listado from './components/Listado'
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';

function App() {
  
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  

  return (
    <> 
      <Buscador
      listaColaboradores={listaColaboradores}
      setListaColaboradores={setListaColaboradores}></Buscador>
      <Listado
      listaColaboradores={listaColaboradores}
      setListaColaboradores={setListaColaboradores}
      />
      <Formulario error={error} setSuccess={setSuccess} setError={setError} />
      <Alert error={error} success={success} />
      
    </>
  )
}

export default App

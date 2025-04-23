import { useState } from 'react';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';
import './App.css';

function App() {
  const [citas, setCitas] = useState([
    {
      mascota: 'Nina',
      propietario: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    }
  ]);

  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <Formulario />
        <ListadoCitas citas={citas} />
      </div>
    </div>
  );
}

export default App;


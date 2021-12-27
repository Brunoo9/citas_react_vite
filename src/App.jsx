import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import  { useState, useEffect } from 'react';


function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({}); // cuando se apreta en el boton editar se llena este paciente
  
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    setPacientes(pacientesActualizados);
  }

  useEffect(() => {
   const pacienteLS = localStorage.getItem('pacientes') ?? [] ; // sino hay nada que le agregue un arreglo vacio

   setPacientes(JSON.parse(pacienteLS));
    

  }, []); // cuando le pasamos un arreglo vacio el useeffect se ejecuta una sola vez



  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  return (
    <div className="container mt-20 mx-auto">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
          pacientes={pacientes} 
          setPacientes={setPacientes}
          
          setPaciente={setPaciente}
          paciente={paciente} 
        />
        <ListadoPacientes 
          pacientes={pacientes}

          eliminarPaciente = {eliminarPaciente}
          setPaciente={setPaciente}
        />
      </div>
      
    </div> 
  );
}

export default App

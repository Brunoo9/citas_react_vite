import React from 'react'
import Paciente from './Paciente';

const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {

   

    return (
       
        <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-auto">
            { pacientes && pacientes.length === 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-rose-600 font-bold">y aparacerán en este lugar</span>
                    </p>
                </>
            ) : ( 
            <>
                <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {''}
                    <span className="text-rose-600 font-bold">Pacientes</span>
                </p>
                {pacientes.map((paciente)=>
                    <Paciente 
                        key={paciente.id} // le pasamos una key por que sino no te deja 
                        paciente={paciente}
                        setPaciente={setPaciente}
                        eliminarPaciente = {eliminarPaciente}
                    />
                )}
            </>)
            
            }
           
                          
        </div>
        
    )
}

export default ListadoPacientes;

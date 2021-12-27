import React from 'react'

const Paciente = ({ paciente, setPaciente,eliminarPaciente }) => {
    const { nombre, propietario, email, fechaAlta, sintomas } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Estás seguro de eliminar el paciente?');

        if (respuesta) eliminarPaciente(paciente.id);
        
        
    }
    return (
            <div className="mx-5 my-10 px-5 py-6  bg-white shadow-md rounded-xl">
                
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
                    <span className="font-normal normal-case">{fechaAlta}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-between">
                    <button
                        type='button'
                        className="py-2 px-10 bg-green-500 hover:bg-green-700 text-white font-bold uppercase rounded-md mt-5"
                        onClick={() => setPaciente(paciente)} // le paso el objeto lleno de un solo paciente para editar 
                    >Editar</button>
                    <button
                        type='button'
                        className="mt-5 py-2 px-10 bg-rose-600 hover:bg-rose-700 text-white font-bold uppercase rounded-md"
                        onClick={handleEliminar}
                    >Eliminar</button>
                </div>
            </div>
    )
}

export default Paciente

import { useState,useEffect } from 'react';
import Error from './Error';
 

const Formulario = ( { setPacientes, pacientes, paciente, setPaciente } ) => {
   
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fechaAlta, setFechaAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);
    
    useEffect(() => { // escucha por los cambios que sucedan dentro de nuestro state
        
       if( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFechaAlta(paciente.fechaAlta);
            setSintomas(paciente.sintomas);
       }
    }, [paciente]); // cuando cambie el valor de objeto paciente se ejecute el codigo dentro

    const handleSubmit = (e)=>{ // cuando se agrega un paciente al apretar en el boton 
        e.preventDefault();
        if ([nombre,propietario,email,fechaAlta,sintomas].includes('')) { // si alguno del arreglo es un string vacio
            
            setError(true); 
            return;
        }
      
        setError(false); 

        const objetoPaciente = { // objeto de lo que obtenemos en el formulario
            nombre,
            propietario,
            email,
            fechaAlta,
            sintomas
        }
        
        // para editar elk paciente 
        if (paciente.id) {// si existe es pq tiene algo, por ende estariamos editando 

            objetoPaciente.id = paciente.id; // le volvemos a asignar el mismo id por que el objeto no lo tiene 
            // porque el objeto se llena con lo que hay en el formulario por lo tanto no va tener ningun id 

            const pacientesActualizados = pacientes.map(pacienteState =>
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState);  

            setPacientes(pacientesActualizados);// actualizo los pacientes

            setPaciente({});

        }else{
            // llenar el objeto pacientes con los datos del form 
            objetoPaciente.id = Date.now().toString();
            setPacientes([...pacientes,objetoPaciente] );
            
        }
        
        
        //reiniciar form
        setNombre('');
        setPropietario('');
        setEmail('');
        setFechaAlta('');
        setSintomas('');

    }
    

    return (
        <div className="md:w-1/2 lg:w-2/5 "> 
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-rose-600 font-bold">administralos</span>
            </p>
            <form onSubmit={handleSubmit} action="" className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-5" autoComplete="off">
                {error && <Error msj={'TODOS LOS CAMPOS SON OBLIGATORIOS PERRIIIII'} /> }        
                <div className="mb-5" >
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">
                        Nombre Mascota
                    </label>
                    <input 
                        value={nombre} 
                        onChange={(e) => {setNombre(e.target.value)}}
                        id="mascota" 
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5" >
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">
                        Nombre Propietario
                    </label>
                    <input 
                        onChange={(e) => {setPropietario(e.target.value)}}
                        value={propietario}
                        id="propietario" 
                        type="text" 
                        placeholder="Nombre del propietario" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5" >
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">
                        Email
                    </label>
                    <input 
                        onChange={(e) => {setEmail(e.target.value)}}
                        value={email}
                        id="email" 
                        type="text" 
                        placeholder="Dirección de correo" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>

                <div className="mb-5" >
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="fechaAlta">
                        Fecha Alta
                    </label>
                    <input 
                        id="fechaAlta" 
                        type="date" 
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        onChange={(e) => {setFechaAlta(e.target.value)}}
                        value={fechaAlta}
                    />
                </div>

                <div className="mb-5" >
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">
                        Síntomas
                    </label>
                    <textarea 
                        onChange={(e) => {setSintomas(e.target.value)}}
                        value={sintomas}
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md resize-none" 
                        id="sintomas"
                    />
                </div>
                
                <input type="submit" value={ paciente.id ? 'Editar paciente': 'Agregar paciente' } className="bg-rose-600 w-full p-3 text-white font-bold hover:bg-rose-700 cursor-pointer transition-all"/>
            </form>
        
        </div>
    )
}

export default Formulario

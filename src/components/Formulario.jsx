import { useState } from "react";

export default function Formulario({error, setError, setSuccess,listaColaboradores, setListaColaboradores}) {

    const [nombre,setNombre] =useState("")
    const [email,setEmail] =useState("")
    const [edad,setEdad] =useState("")
    const [cargo,setCargo] =useState("")
    const [telefono,setTelefono] =useState("")

    const RegexParaNombre= /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/
    const RegexParaEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const validarDatos= (e) => {
        e.preventDefault()

        if (nombre.length === 0) {
            setError("Ingresa el nombre porfavor")
            setSuccess("")
            
            
        }else if(!RegexParaNombre.test(nombre)){
            setError("El nombre no puede contener numeros ni simbolos")
            setNombre("")
            setSuccess("")

        }else if(email.length === 0){
            setError("Ingresa el email porfavor")
            setSuccess("")
        }else if(!RegexParaEmail.test(email)){
            setError("El email debe ser como el ejemplo")
            setSuccess("")
            setEmail("")
        }
        else if(edad.length=== 0){
            setError("Ingresa la edad porfavor")
            setSuccess("")
        }else if(cargo.length===0){
            setError("Ingresa el cargo porfavor")
            setSuccess("")
        }else if(telefono.length===0){
            setError("Ingresa el telefono porfavor")
            setSuccess("")
        }
        
        
        else{
            setSuccess("Colaborador Agregado")
            setError("")
            setNombre("")
            setEmail("")
            setCargo("")
            setEdad("")
            setTelefono("")
            setListaColaboradores([...listaColaboradores, {nombre: nombre, correo: email, cargo: cargo, edad: edad, telefono: telefono}])

            
            
        }
    }
   
    return (
        <div >

            <form onSubmit={validarDatos}>
                <div className="form-group">
                    <input onChange={(e)=>{setNombre(e.target.value)}} value={nombre} type="text" placeholder="Nombre del colaborador" className="form-control mt-2"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type="text" placeholder="Email del colaborador" className="form-control mt-2"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setEdad(e.target.value)}} min={0} value={edad} type="number" placeholder="Edad del colaborador" className="form-control mt-2"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setCargo(e.target.value)}} value={cargo} type="text" placeholder="Cargo del colaborador" className="form-control mt-2"></input>
                </div>
                <div>
                    <input onChange={(e)=>{setTelefono(e.target.value)}} value={telefono} type="number" placeholder="Teléfono del colaborador" className="form-control mt-2"></input>
                </div>

                <button type="submit" className="btn w-100 mt-3
            btn-success">Agregar colaborador</button>
            </form>

        </div>
    )
}
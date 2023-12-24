import { useState } from "react";
export default function Listado({
    setlistaColaboradores,
    listaColaboradores
}) {

    return (
        <div>
            <table className="tabla table table-light table-striped table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                {listaColaboradores.map((listaColaboradores, index) => (
                    <tr key={index}>
                        <th scope="row">{listaColaboradores.nombre}</th>
                        <td>{listaColaboradores.correo}</td>
                        <td>{listaColaboradores.edad}</td>
                        <td>{listaColaboradores.cargo}</td>
                        <td>{listaColaboradores.telefono}</td>

                    </tr>
                    
                ))}
                </tbody>
            </table>
        </div>
    )
}
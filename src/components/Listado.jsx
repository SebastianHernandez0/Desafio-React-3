export default function Listado({
    listaColaboradores
}) {

    return (
        <div className="listadocontainer">
            <table className="tabla table table-light table-striped table-bordered ">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Eliminar colaborador</th>
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
                        <button onClick={() => eliminarColaborador(listaColaboradores)}>Eliminar</button>

                    </tr>
                    
                ))}
                </tbody>
            </table>
        </div>
    )
}
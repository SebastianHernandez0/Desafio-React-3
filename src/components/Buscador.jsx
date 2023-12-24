export default function Buscador({ setListaColaboradores, listaColaboradores }) {


    function filtrarD(array, dato) {

        const busqueda = array.filter((e) =>

            e.nombre.toString().toLowerCase().includes(dato.toString().toLowerCase()) ||
            e.correo.toString().toLowerCase().includes(dato.toString().toLowerCase()) ||
            e.edad.toString().toLowerCase().includes(dato.toString().toLowerCase()) ||
            e.cargo.toString().toLowerCase().includes(dato.toString().toLowerCase()) ||
            e.telefono.toString().toLowerCase().includes(dato.toString().toLowerCase())

        );

        return busqueda
    }


    const filtrarTable = (e) => {
        const listaFiltrada = filtrarD(listaColaboradores, e)

            return setListaColaboradores(listaFiltrada)


    }


    return (

        <>

            <input type="text" className="form-control" placeholder="Buscar Colaborador" onChange={(e) => filtrarTable(e.target.value)} />

        </>

    );
}
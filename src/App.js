import React, { useState, useEffect } from "react";

// Importamos los componentes
import Buscador from "./components/Buscador";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
    const [busqueda, setBusqueda] = useState("");
    const [imagenes, setImagenes] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [totalPaginas, setTotalPaginas] = useState(1);

    useEffect(() => {
        if (busqueda === "") return;
        const consultarApi = async () => {
            // console.log(busqueda);
            const imgPorPagina = 32;
            const key = "13218963-96c515a2460cd245f52ed4e63";
            const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}&page=${paginaActual}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            // console.log(resultado)

            // Guardamos el las imagenes
            setImagenes(resultado.hits);

            // Calcular el total de paginas
            const calculaTotalPaginas = Math.ceil(
                resultado.totalHits / imgPorPagina
            );
            setTotalPaginas(calculaTotalPaginas);

            // llevar al usuario hacia arriva
            const jumbotron = document.querySelector(".jumbotron");
            jumbotron.scrollIntoView({ behavior: "smooth", block: "start" });
        };
        consultarApi();
    }, [busqueda, paginaActual]);

    const paginaAnterior = () => {
        let nuevaPaginaAnterior = paginaActual - 1;
        // colocarlo en el state
        setPaginaActual(nuevaPaginaAnterior);
    };

    const paginaSiguiente = () => {
        let nuevaPaginaPosterior = paginaActual + 1;
        // colocarlo en el state
        setPaginaActual(nuevaPaginaPosterior);
    };

    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Buscador 
                setBusqueda={setBusqueda}
                setPaginaActual={setPaginaActual}
                 />
            </div>
            <div className="row justify-content-center">
                <ListadoImagenes imagenes={imagenes} />

                {paginaActual === 1 ? null : (
                    <button
                        onClick={paginaAnterior}
                        type="button"
                        className="btn btn-info mr-1"
                    >
                        &laquo; Anterior{" "}
                    </button>
                )}

                {paginaActual === totalPaginas ? null : (
                    <button
                        onClick={paginaSiguiente}
                        type="button"
                        className="btn btn-info "
                    >
                        Siguiente &raquo;
                    </button>
                )}
            </div>
        </div>
    );
}

export default App;

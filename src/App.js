import React, {useState, useEffect} from "react";

// Importamos los componentes
import Buscador from "./components/Buscador";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {

    const [busqueda, setBusqueda] = useState('');
    const [imagenes, setImagenes] = useState([]);

    useEffect( ()=> {

      if(busqueda === '') return;
      const consultarApi = async () => {
        
        // console.log(busqueda);
        const imgPorPagina = 30;
        const key = '13218963-96c515a2460cd245f52ed4e63';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imgPorPagina}`;

        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
        // console.log(resultado)
        setImagenes(resultado.hits);
        
      } 
      consultarApi(); 
    },[busqueda]);

    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Buscador setBusqueda={setBusqueda} />
            </div>
            <div className="row justify-content-center" >
              <ListadoImagenes imagenes={imagenes} />
            </div>
        </div>
    );
}

export default App;

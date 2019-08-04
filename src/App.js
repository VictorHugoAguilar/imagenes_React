import React, {useState, useEffect} from "react";
import axios from 'axios';

// Importamos los componentes
import Buscador from "./components/Buscador";

function App() {

    const [busqueda, setBusqueda] = useState('');

    useEffect( ()=> {

      if(busqueda === '') return;
      const consultarApi = async () => {
        
        const imgPorPagina = 30;
        const key = '13218963-96c515a2460cd245f52ed4e63';
        const url = `https://pixabay.com/api/?key=${key}$q=${busqueda}&per_page=${imgPorPagina}`;

        const resultado = await axios.get(url)

        console.log(resultado);

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
            
            </div>
        </div>
    );
}

export default App;

import React from "react";

// Importamos los componentes
import Buscador from "./components/Buscador";

function App() {
    return (
        <div className="app container">
            <div className="jumbotron">
                <p className="lead text-center">Buscador de Imágenes</p>
                <Buscador />
            </div>
            <div className="row justify-content-center" >
            
            </div>
        </div>
    );
}

export default App;

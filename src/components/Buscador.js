import React, {useState } from 'react';


function Buscador(){

    const [termino, setTermino]=useState('');
    const [error, setError] =useState(false);

    const buscarImagen = e => {
        e.preventDefault();
        // Validar datos
        if(termino === ''){
            setError(true);
            return;
        }
        // Enviar el termino hacia el componente principal
        setError(false);
        
    }

    return (
        <form
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar una imagen, ejemplo: Futbol, Café"
                        onChange={(e)=> setTermino(e.target.value)}
                    />

                </div>
                <div className="form-group col-md-4">
                    <input
                        type="button"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                                    </div>
            </div>
        </form>

    );

}

export default Buscador;
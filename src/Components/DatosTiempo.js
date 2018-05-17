import React, { Component } from 'react';
import Temperatura from "./Temperatura";
import InformacionExtra from './InformacionExtra';

/// definimos los datos de la constante de temperatura js //
class DatosTiempo extends Component {
    render(){
        return(
            <div>
                <Temperatura icono={""}/>
                <InformacionExtra humedad={85} viento={'5m/s'}/>
            </div>
        )
    }
};
export default DatosTiempo;

import React, {Component} from 'react';
import Localizacion from './Localizacion';
import DatosTiempo from './DatosTiempo';

class LocalizadorTiempo extends Component {
    render(){
        return(
            <div>
                <Localizacion ciudad={"Valencia"}/>
                <DatosTiempo/>
            </div>
        );
    }
}

export default LocalizadorTiempo;
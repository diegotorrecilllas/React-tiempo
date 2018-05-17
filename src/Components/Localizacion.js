import React, { Component } from 'react';
class Localizacion extends Component {
    constructor(...props){
        super(...props);
    }
    render(){
        const {ciudad} = this.props;
        return(
            <div>
                <h1>{ciudad}</h1>
            </div>

        );
    }
}
export default Localizacion;
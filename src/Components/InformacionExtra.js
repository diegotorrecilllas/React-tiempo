import React, { Component } from 'react';
class InformacionExtra extends Component {
    constructor(...props){
        super(...props);
    }
    render(){
        const {humedad,viento} =this.props;
        return(
            <div>
                <span>{`${humedad} % | `}</span>
                <span>{viento +' viento'} </span>
            </div>

        );
    }
}
export default InformacionExtra;
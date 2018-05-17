import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

class Temperatura extends Component {

    constructor(...props){
        super(...props);
    }
    getIcon(tiempo){
        //if(tiempo==="") return "cloud";
        switch (tiempo){
            case 'sol':
                return "day-sunny";
                break;
            default : return "cloud";

        }
    }
    render(){

        const {icono} = this.props;
        console.log(this.getIcon(icono));
        return(
            <div>
                <h4>20ºC</h4>
                <WeatherIcons name={this.getIcon(icono)} size="2x" />

            </div>
        );
    }
}
export default Temperatura;

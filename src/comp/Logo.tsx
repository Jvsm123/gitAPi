import * as React from 'react';

import Light from '../assets/img/brightness-high.svg';
import Black from '../assets/img/moon.svg';

type Switch = { tipo: string, interr: boolean };

//Props, State são obrigatórios!
export default class Logo extends React.Component <{}, Switch> 
{
    //não há necessidade do useState, nem constructor
    state: Switch = { tipo: "LIGTH", interr: true };

    toggle( obj: Switch ): void
    {
        (obj.tipo === "LIGTH")
            ? this.setState({ tipo: "BLACK", interr: !this.state.interr })
            : this.setState({ tipo: "LIGTH", interr: !this.state.interr });
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="logo">
                <h1>devfinder</h1>
                <div className="switch">
                    <h4 onClick={ () => this.toggle(this.state) }>
                        {this.state.tipo}
                    </h4>
                    <img src={ this.state.interr && Light || Black } alt="#"/>
                </div>
            </div>
        );
    };
};

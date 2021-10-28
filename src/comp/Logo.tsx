import * as React from 'react';

import Light from '../assets/img/brightness-high.svg';
import Black from '../assets/img/moon.svg';

type Switch =
{
    readonly tipo: string,
    readonly interr: boolean
};

type ReadonlySwitch = Readonly<Switch>;

//Props, State
export default class Logo extends React.Component <{}, ReadonlySwitch> 
{
    constructor( props: any )
    {
        super( props );

        //não há necessidade do useState
        this.state =
        {
            tipo: "LIGTH",
            interr: true
        };
    };

    toggle( obj: Switch ): void
    {
        if(obj.tipo === "LIGTH") this.setState( () =>
        {
            return {
                tipo: "BLACK",
                interr: false
            };
        });
        else this.setState( () =>
        {
            return {
                tipo: "LIGTH",
                interr: true
            };
        });
    };
 
    render(): React.ReactElement<any, any>
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

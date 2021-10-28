import * as React from 'react';
import axios from 'axios';

import Search from '../assets/img/search.svg';
import Global from '../global/Global';

type state = Readonly<{ valor: string }>;

//Props, State
export default class Pesquisa extends React.Component<{}, state>
{
    constructor( props: React.Props<void> )
    {
        super( props );
     
        this.state = { valor: '' };
    };
 
    setValor( valores: string ): void
    {
        this.setState( () =>
        {
            return { valor: valores };
        });
    };
 
    Api( valor: string ): void
    {
        const url: string = `https://api.github.com/users/${valor}`;

        axios.get(url).then( ( res ) =>
        {
            ( !res )
                ? console.log(res)
                : Global.user = res;
        });
    };
 
    render(): React.ReactElement<any, any>
    {
        return (
            <div className="pesquisa">
                <div className="barra-pesquisa">
                    <img src={ Search } alt="pesquisa"/>
                    <input
                        type="text"
                        placeholder="Pesquisar Nome"
                        maxLength={100}
                        onChange={ (e) => this.setValor(e.target.value) }
                    />
                </div>
                <button onClick={ () => this.Api( this.state.valor ) }>
                    Pesquisar
                </button>
            </div>
        );
    };
};

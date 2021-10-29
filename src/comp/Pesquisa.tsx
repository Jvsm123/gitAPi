import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

import Search from '../assets/img/search.svg';

type State = { valor: string };
type Props = { user: AxiosResponse | null, setUser: any };

//Props, State
export default class Pesquisa extends React.Component< Props, State >
{
    //this.state sem constructor
    state: State = { valor: '' };
 
    setValor( valores: string ): void
    {
        this.setState({ valor: valores });
    };
 
    Api( valor: string ): void
    {
        if(valor)
        {
            const url: string = `https://api.github.com/users/${valor}`;
         
            axios.get( url ).then( ( res: AxiosResponse ) =>
            {
                ( !res )
                    ? alert("Usuário não Existe!")
                    : this.props.setUser({user: res.data});
                console.log( res.data );
            });
        }
        else alert("ERRO, Você não passou um usuário válido!");
    };
 
    render(): React.ReactElement<HTMLElement>
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

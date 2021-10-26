import React from 'react';

import Search from '../assets/img/search.svg';

export default class Pesquisa extends React.Component
{
    constructor( props: any )
    {
        super( props );
    };
 
    render()
    {
        return (
            <div className="pesquisa">
                <div className="barra-pesquisa">
                    <img src={Search} alt="pesquisa"/>
                    <input
                        type="text"
                        placeholder="Pesquisar Username do Github"
                        maxLength={100}
                    />
                </div>
                <button>Pesquisar</button>
            </div>
        );
    };
};

import React from 'react';

import Logo from './comp/logo';
import Pesquisa from './comp/pesquisa';
import Perfil from './comp/perfil';

export default class App extends React.Component
{
    render()
    {
        return(
            <div className="main">
                <Logo/>
                <Pesquisa/>
                <Perfil/>
            </div>
        );
    };
};

import * as React from 'react';

import Logo from './comp/Logo';
import Pesquisa from './comp/Pesquisa';
import Perfil from './comp/Perfil';

export default class App extends React.Component
{
    render(): React.ReactElement<any, any>
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

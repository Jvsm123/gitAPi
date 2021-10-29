import * as React from 'react';

import Logo from './comp/Logo';
import Pesquisa from './comp/Pesquisa';
import Perfil from './comp/Perfil/Perfil';
import PerfilFake from './comp/Perfil/PerfilFake';

type User = { user: any | null };

export default class App extends React.Component< {}, User >
{
    constructor( props: React.Props<never> )
    {
        super( props );
     
        this.state = { user: null };
        this.setState = this.setState.bind(this);
    };
 
    render(): React.ReactElement<HTMLElement>
    {
        return(
            <div className="main">
                <Logo/>
                <Pesquisa
                    user={this.state.user}
                    setUser={this.setState}
                />
                { this.state.user
                    && <Perfil user={this.state.user}/>
                    || <PerfilFake/>
                }
            </div>
        );
    };
};

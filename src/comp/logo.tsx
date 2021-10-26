import React from 'react';

import Light from '../assets/img/brightness-high.svg';

export default class Logo extends React.Component
{
    constructor( props: any )
    {
        super( props );
    };
 
    render()
    {
        return (
            <div className="logo">
                <h2>DevFinder</h2>
                <div className="switch">
                    <h4>Light</h4>
                    <img src={Light} alt="#"/>
                </div>
            </div>
        );
    };
};

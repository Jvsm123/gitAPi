import React from 'react';

import Link from '../assets/img/link-45deg.svg';
import Build from '../assets/img/building.svg';
import Twitter from '../assets/img/twitter.svg';
import Geo from '../assets/img/geo-alt-fill.svg';

import Octo from '../assets/img/Octocat.png';

export default class Perfil extends React.Component
{
    constructor( props: any ) { super( props ) };
 
    render()
    {
        return (
            <div className="perfil">
                <aside>
                    <img id="Octo" src={Octo} alt="#"/>
                </aside>
                <div className="perfilAspec">
                    <div className="detalhes">
                        <div className="user">
                            <h2>The Octocat</h2>
                            <a href="#">octocat</a>
                        </div>
                        <p>Joined 25 Jan 2011</p>
                    </div>
                 
                    <div className="desc">
                        <h4>
                            Dolor ea quidem aut corporis labore?
                            Ipsa fugit rem iure voluptas explicabo
                            Molestiae facilis dolores quam neque
                            fugit Provident vel cum esse aliquid
                            inventore Explicabo aspernatur tempora
                            magni saepe quae.
                        </h4>
                    </div>
                 
                    <div className="gitinfos">
                        <div className="repos">
                            <h4>repos</h4>
                            <h3>8</h3>
                        </div>
                        <div className="followers">
                            <h4>Followers</h4>
                            <h3>3938</h3>
                        </div>
                        <div className="following">
                            <h4>Following</h4>
                            <h3>9</h3>
                        </div>
                    </div>
                 
                    <div className="media">
                        <div className="mediaInfo">
                            <img src={Geo} alt="Geo"/>
                            <p>San Francisco</p>
                        </div>
                     
                        <div className="mediaInfo">
                            <img src={Link} alt="Link"/>
                            <p>https://github.blog</p>
                        </div>
                     
                        <div className="mediaInfo">
                            <img src={Twitter} alt="Twitter"/>
                            <p>Not Available</p>
                        </div>
                     
                        <div className="mediaInfo">
                            <img src={Build} alt="Build"/>
                            <p>agithub</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

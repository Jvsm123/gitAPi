import { Component } from 'react';

import Link from '../../assets/img/link-45deg.svg';
import Build from '../../assets/img/building.svg';
import Twitter from '../../assets/img/twitter.svg';
import Geo from '../../assets/img/geo-alt-fill.svg';
import Octo from '../../assets/img/Octocat.png';

export default class Perfil extends Component
{
    render(): React.ReactElement<HTMLElement>
    {
        return (
            <div className="perfil">
                <aside>
                    <img
                        id="Octo"
                        src={Octo}
                        alt="#"
                    />
                </aside>

                <div className="detalhes">
                    <div className="user">
                        <h2>The Octocat</h2>
                        <p >octocat</p>
                    </div>
                    <p>Joined 25 Jan 2011</p>
                </div>

                <div className="desc">
                    <h4>
                        Dolor ea quidem aut corporis labore?
                        Ipsa fugit rem iure voluptas explicabo
                        Molestiae facilis dolores quam neque
                    </h4>
                </div>

                <div className="gitinfos">
                    <div className="repos">
                        <h4>Repos</h4>
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
                    <div className="left">
                        <div className="mediaInfo">
                            <p>
                                <img src={Geo} alt="Geo"/>
                                San Francisco
                            </p>
                        </div>

                        <div className="mediaInfo end">
                            <p>
                                <img src={Link} alt="Link"/>
                                https://github.blog
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="mediaInfo">
                            <p>
                                <img src={Twitter} alt="Twitter"/>
                                Not Available
                            </p>
                        </div>

                        <div className="mediaInfo end">
                            <p>
                                <img src={Build} alt="Build"/>
                                agithub
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

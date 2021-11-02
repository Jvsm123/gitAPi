import * as React from 'react';

import Link from '../../assets/img/link-45deg.svg';
import Build from '../../assets/img/building.svg';
import Twitter from '../../assets/img/twitter.svg';
import Geo from '../../assets/img/geo-alt-fill.svg';

type Props = { user: any };

export default class Perfil extends React.Component< Props, {} >
{
    render(): React.ReactElement<HTMLElement>
    {
        const tw: String = this.props.user.twitter_username || "Not Available";
        const comp: String = this.props.user.company || "Not Available";
        const link: String = this.props.user.html_url || "Not Available";
        const geo: String = this.props.user.location || "Not Available";
        const created: String = this.props.user.created_at || "Not Available";
        const reg: RegExpMatchArray | any = created.match(/([0-9]+)-([0-9]+)-([0-9]+)/gi);
        const meses: Array<String> = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        const date: Date = new Date(reg.join(''));
        const created_at: String = ( (date.getDate()) + " " + (meses[date.getMonth()]) + " " + (date.getFullYear()) )

        return (
            <div className="perfil">
                <aside>
                    <img
                        id="Octo"
                        src={this.props.user.avatar_url}
                        alt="#"
                    />
                </aside>

                <div className="detalhes">
                    <div className="user">
                        <h2>{this.props.user.login}</h2>
                        <p>{this.props.user.name}</p>
                    </div>
                    <p>Joined {created_at}</p>
                </div>

                <div className="desc">
                    <h4>{this.props.user.bio}</h4>
                </div>

                <div className="gitinfos">
                    <div className="repos">
                        <h4>Repos</h4>
                        <h3>{this.props.user.public_repos}</h3>
                    </div>
                    <div className="followers">
                        <h4>Followers</h4>
                        <h3>{this.props.user.followers}</h3>
                    </div>
                    <div className="following">
                        <h4>Following</h4>
                        <h3>{this.props.user.following}</h3>
                    </div>
                </div>

                <div className="media">
                    <div className="left">
                        <div className="mediaInfo">
                            <p>
                                <img src={Geo} alt="Geo"/>
                                {geo}
                            </p>
                        </div>

                        <div className="mediaInfo end">
                            <p>
                                <img src={Link} alt="Link"/>
                                {link}
                            </p>
                        </div>
                    </div>

                    <div className="right">
                        <div className="mediaInfo">
                            <p>
                                <img src={Twitter} alt="Twitter"/>
                                {tw}
                            </p>
                        </div>

                        <div className="mediaInfo end">
                            <p>
                                <img src={Build} alt="Build"/>
                                {comp}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

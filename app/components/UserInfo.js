var React = require('react');
var UserRepos = require('./UserRepos');

function UserInfo(props){
    var userInfo = props.user ?
    (
        <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
                <img src={props.user.avatar_url} className="img-circle" alt="avatar" width="140" height="140" />
                <h2>{props.user.login}</h2>
                <p>{props.user.name}</p>
                <p>Seguidores: {props.user.followers} / Seguindo: {props.user.following}</p>
                <p><a className="btn btn-default" href={props.user.url} role="button">Ver detalhes</a></p>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12">
                <UserRepos repos={props.repos}/>
            </div>
        </div>
    ) : null;

    return userInfo;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
};

module.exports = UserInfo;
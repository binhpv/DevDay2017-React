import React from 'react';

class RepositoryListItem extends React.Component {

    render() {
        var { repository } = this.props;
        return (
            <li className="table-view-cell media">
                <a href={"#repository/" + repository.id}>
                   <img src={repository.owner.avatar_url} className="media-object small pull-left" alt="{repository.description}" />
                {repository.name}
                  <p>{repository.owner.login}</p>
                </a>
            </li>
        );
    }
};

export default RepositoryListItem;
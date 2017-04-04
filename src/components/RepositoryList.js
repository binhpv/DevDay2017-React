import React from 'react';
import RepositoryListItem from './RepositoryListItem'

class RepositoryList extends React.Component {
    render() {
        return (
            <ul className="table-view">
                {this.props.repositories.map(repository => <RepositoryListItem 
                                                            key={repository.id} 
                                                            repository={repository} />)}
            </ul>
        );
    }
};

export default RepositoryList;
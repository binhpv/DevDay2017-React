import React from 'react';
import './App.css';
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import RepositoryList from './components/RepositoryList'

class App extends React.Component {
    state = {
        searchKey: 'react',
        repositories: []
    }

    getGitHubURL() {
        return `https://api.github.com/search/repositories?q=${this.state.searchKey}&sort=stars&order=desc`;
    }

    searchHandler(searchKey) {
        this.setState({ searchKey });
        this.fetchData();
    }

    render() {
        return (
            <div>
                <Header text="GitHub search"></Header>
                <SearchBar searchHandler={this.searchHandler.bind(this)} 
                searchKey={this.state.searchKey}></SearchBar>
                <RepositoryList repositories={this.state.repositories}/>
            </div>
        );
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        fetch(this.getGitHubURL()).then(response => response.json().then(
            data => this.setState({ repositories: data.items })));
    }
}

export default App;

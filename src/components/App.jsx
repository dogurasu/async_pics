import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {

    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: "1rem"}}>
                <h1>App</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;
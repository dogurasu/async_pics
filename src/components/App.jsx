import React from 'react';
// import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
require('dotenv').config();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    state = {
        images: []
    }

    async onSearchSubmit(term) {
        // console.log(process.env.REACT_APP_API_URL);
        const response = await unsplash.get('search/photos', {
            // params specifies the different query string parameters we want to add to this request
            params: { query: term },
        });
        // console.log(response.data.results);
        // this.state.images.map - if we called map on a value of null, we'd get an error; make sure to initialize images to an empty array
        this.setState({ images: response.data.results });
    }

    // avoids 'Unhandled Rejection (TypeError): this.setState is not a function' error
    // onSearchSubmit = async (term) => {
    //     // console.log(process.env.REACT_APP_API_URL);
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         // params specifies the different query string parameters we want to add to this request
    //         params: { query: term },
    //         headers: {
    //             Authorization: 'Client-ID ' + process.env.REACT_APP_API_ACCESS_KEY
    //         }
    //     })

    //     // console.log(response.data.results);

    //     // this.state.images.map - if we called map on a value of null, we'd get an error; make sure to initialize images to an empty array
    //     this.setState({ images: response.data.results })
    // }

    render() {
        return (
            <div className="ui container" style={{marginTop: "1rem"}}>
                <h1>Async_Pics</h1>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <h2>Found {this.state.images.length} images</h2>
            </div>
        );
    }
}

export default App;
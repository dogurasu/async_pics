import React from 'react';

class SearchBar extends React.Component {
    // another way to fix the "TypeError: Cannot read property 'state' of undefined"
    // constructor(props) {
    //     super(props);
    //     this.onFormSubmit = this.onFormSubmit.bind(this)
    // }

    state = {
        term: ''
    }

    // lifecycle methods
    componentDidUpdate = () => {
        console.log("update");
    }
    
    // eventHandler methods
    // community convention of callback name
    //      - "on" + name_of_element + event_watching_for
    // also called 'handle' + ___
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // another example of callback event handler
    onInputClick(event) {
        console.log("Input was clicked");
        // this.setState();
    }

    // onFormSubmit(event) {
    //     event.preventDefault();
    //     console.log(this.state.term);
    // }

    // another way to fix the TypeError: Cannot read property 'state' of undefined
    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    className="ui form"
                    // onSubmit={this.onFormSubmit}
                    // another way to solve the "TypeError: Cannot read property 'state' of undefined":
                    //      - pass an arrow function directly 
                    // onSubmit={(e) => this.onFormSubmit(e)} // if onFormSubmit is bound in the ctor

                    // another way to solve the "TypeError: Cannot read property 'state' of undefined":
                    //      - bind the function when passing it as a prop to 'onChange'
                    // onSubmit={this.onFormSubmit.bind(this)}
                    onSubmit={this.onFormSubmit} // if onFormSubmit is defined as an arrow function
                >
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}                            
                            // certain operations like forcing capital letters gets easier w/ controlled components
                            // onChange={(e) => this.setState({ term: e.target.value.toUpperCase() })}
                            // onChange={this.onInputChange.bind(this)}
                            // alternate syntax for event handlers
                            //      - the same thing except that we dont' have to define a separate method in our class
                            // onChange={(event) => console.log(event.target.value)}
                            // onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        );
    }
}



export default SearchBar;
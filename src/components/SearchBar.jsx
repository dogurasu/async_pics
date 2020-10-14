import React from 'react';

class SearchBar extends React.Component {
    state = {

    }

    // lifecycle methods
    componentDidUpdate = () => {
        console.log("update");
    }
    
    // eventHandler methods
    // community convention of callback name
    //      - "on" + name_of_element + event_watching_for
    // also called 'handle' + ___
    onInputChange(event) {
        console.log(event.target.value);
    }

    // another example of callback event handler
    onInputClick(event) {
        console.log("Input was clicked");
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange.bind(this)}
                            // onClick={this.onInputClick}
                        />
                    </div>
                </form>
            </div>
        );
    }
}



export default SearchBar;
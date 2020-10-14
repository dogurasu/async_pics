import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();

        this.state = {
            spans: 0
        }
    }

    componentDidMount() {
        // console.log(this.imageRef);
        // console.log(this.imageRef.current.height);
        this.imageRef.current.addEventListener('load', this.setSpans.bind(this));
    };

    setSpans() {
        // console.log(this.imageRef.current.clientHeight);
        const height = this.imageRef.current.clientHeight;

        // round up to the next heighest row
        // we need to divide by 150 to figure out how many rows this image needed to be displayed properly
        const spans = Math.ceil(height / 10);

        this.setState({ spans: spans });
    };

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imageRef}
                />
            </div>
        );
    }
};

export default ImageCard;
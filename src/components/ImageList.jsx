import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    console.log(props.images);


    // iterate thru every single image
    // destructure (instead of passing (image) => {image.urls.regular}), you can use ({ desc, id, urls}) => {desc, id, ...}
    // const images = props.images.map((image) => <img src={image.urls.regular} alt={image.description} key={image.id}/>);
    // const images = props.images.map( ({ description, id, urls }) => {
    //     return <img src={urls.regular} alt={description} key={id} />
    // });

    // now with ImageCard we don't have to destructure anything and just pass props
    const images = props.images.map( (image) => {
        return <ImageCard image={image} key={image.id} />
    });

    console.log(images);

    return <div className="image-list">{images}</div>;
};

export default ImageList;
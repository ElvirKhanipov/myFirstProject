import React from 'react';
import classes from './Photos.module.css';

const Photos = () => {
    return (
        <div className={classes.photos}>
            <img src = 'https://pbs.twimg.com/profile_images/913840836105969665/qTWGnOCw.jpg'></img>
            <img src = 'https://yt3.ggpht.com/a/AATXAJzLFg6cSUrFq9fMdj9ygYuQpqK1prXb8w1LBsby=s900-c-k-c0xffffffff-no-rj-mo'></img>
            <img src = 'https://pbs.twimg.com/profile_images/430448527454793728/gih1pMg5.jpeg'></img>
        </div>
    )
}

export default Photos;
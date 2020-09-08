import React from 'react';
import classes from './Friend.module.css';

const Friend = () => {
    return (
        <div className={classes.friend}>
            <div >
                <img src = 'https://pbs.twimg.com/profile_images/913840836105969665/qTWGnOCw.jpg'></img>
                Dima
            </div>
            <div >
                <img src = 'https://yt3.ggpht.com/a/AATXAJzLFg6cSUrFq9fMdj9ygYuQpqK1prXb8w1LBsby=s900-c-k-c0xffffffff-no-rj-mo'></img>
                Vitaly
            </div>
            <div >
                <img src = 'https://pbs.twimg.com/profile_images/430448527454793728/gih1pMg5.jpeg'></img>
                Evelina
            </div>
        </div>
    )
}

export default Friend;
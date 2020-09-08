import React from 'react';
import classes from  './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <div>
          <img src = 'https://pbs.twimg.com/profile_images/454263537435942912/qIj-SYJQ.jpeg'></img>
        </div>
        <div>
          {props.message}
        </div>
        <div className={classes.like}>
          <span>
            <img src = 'http://cdn.onlinewebfonts.com/svg/download_228698.png' ></img>
          </span> 
          {props.like}  
        </div>
      </div>  
    </div>  
  )
}

export default Post


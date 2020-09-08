import React from 'react';
import classes from  './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

  let MyPostEl = 
  props.MyPosts.map (posts => <Post message={posts.message} like={posts.like} />);

  let newPostEl = React.createRef();
  
  let addPost = () => {
    props.addPost ();
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPostText (text);
  };

  return (
    <div className={classes.post}>
      <div>
        <h3>My post</h3>
        <div>
          <div>
            <textarea onChange={onPostChange} 
              ref={newPostEl} 
              value={props.newPostText} 
              className={classes.textarea} />
          </div>
          <div>
            <button onClick={addPost} 
              className={classes.button}>Add post</button>
          </div>
        </div>
        <div className={classes.posts}>
          {MyPostEl}
        </div>
      </div>
    </div>
    
  )

}

export default MyPosts


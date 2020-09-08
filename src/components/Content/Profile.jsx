import React from 'react';
import classes from  './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
        return (
                <div className={classes.profile}>
                        <ProfileInfo />   
                        <MyPosts MyPosts={props.profilePage.posts} 
                                newPostText={props.profilePage.newPostText}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText} /> 
                </div>
        )
}

export default Content


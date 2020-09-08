import React from 'react'

let store = {
    _state: {
        profilePage: {
            posts: [
            {id: 1, message: 'Hi, how are you?', like: 10},
            {id: 2, message: 'It"s my first post', like: 20}, 
            {id: 3, message: 'zoppa', like: 10},
            {id: 4, message: 'It"s my SN', like: 20}, 
            ],
            newPostText: '',
        },
    
        messagesPage: { 
            dialogs: [
                {id: 1, name: 'Dima', image: <img src = 'https://pbs.twimg.com/profile_images/913840836105969665/qTWGnOCw.jpg' ></img>, }, 
                {id: 2, name: 'Vitaly', image: <img src = 'https://yt3.ggpht.com/a/AATXAJzLFg6cSUrFq9fMdj9ygYuQpqK1prXb8w1LBsby=s900-c-k-c0xffffffff-no-rj-mo' ></img>, },
                {id: 3, name: 'Evelina', image: <img src = 'https://pbs.twimg.com/profile_images/430448527454793728/gih1pMg5.jpeg' ></img>, },
            ],
            messages: [
            {id: 1, message:'Hi, programmer'},
            {id: 2, message:'Hello, my friend'},
            {id: 3, message:'Hey'}
            ],
        },
    
        sidebar: {
    
        },
    },

    getState () {
        return this._state;
    },

    _callSub () {
    },

    addPost () {
        let newPost = {
            id: 1,
            message: this._state.profilePage.newPostText,
            like: 0
        }; 
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSub (this._state);
    },

    updateNewPostText (newText) {
        this._state.profilePage.newPostText= newText;
        this._callSub (this._state);
    },

    subscribe (observer) {
        this._callSub = observer;
    },

}

export default store;
window.store = store;
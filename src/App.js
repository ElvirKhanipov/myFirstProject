import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Profile';
import Dialogs from './components/Navbar/Dialog/Dialog';
import {Route, BrowserRouter} from 'react-router-dom';
import Friend from './components/Navbar/Friend/Friend';
import News from './components/Navbar/News/News';
import Settings from './components/Navbar/Settings/Settings';
import Photos from './components/Navbar/Photos/Photos';

const App = (props) => {

   return (
    <BrowserRouter>
      <div className = 'app-wrapper'>
       <Header />
       <Navbar />
       <div className='app-wrapper-content'>
       
         <Route path='/dialogs' 
            render={ () => <Dialogs state={props.state.messagesPage}/> }/>
         <Route path='/profile' 
            render={ () => <Content profilePage={props.state.profilePage} 
                                    addPost={props.addPost}
                                    updateNewPostText={props.updateNewPostText} /> }/>
         <Route path='/friends' 
            render={ () => <Friend /> }/>
         <Route path='/photos' 
            render={ () => <Photos /> }/>
         <Route path='/news' 
            render={ () => <News /> }/>
         <Route path='/settings' 
            render={ () => <Settings /> }/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

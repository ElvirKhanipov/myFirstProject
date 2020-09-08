import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialog = (props) => {
        
    let dialogEl = props.state.dialogs.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} image={dialog.image}/> )
    let messageEl = props.state.messages.map ( message => <Message message={message.message}/>)
    
    let newMessageEl = React.createRef();
  
    let newMessage = () => {
      let text = newMessageEl.current.value;
      alert (text);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogEl}  
            </div>
            <div className={classes.messages}>
                {messageEl}
                <div>
                    <textarea ref={newMessageEl} ></textarea>
                    <button onClick={ newMessage } >New Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog
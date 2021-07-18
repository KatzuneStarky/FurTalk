import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTimes,
    faUserFriends,
    faCommentAlt,
    faPaperPlane,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import './Messages.scss';

const Messages = () =>{
    return (
        <div className="messenger-container">
            <div className="messenger-header">
                <h3>Detalles de la reunion</h3>
                <FontAwesomeIcon className="icon" icon={faTimes}/>
            </div>
            <div className="messenger-header-tabs">
                <div className="tab">
                    <FontAwesomeIcon className="icon" icon={faUserFriends}/>  
                    <p>Gente(1)</p>
                </div>
                <div className="tab active">
                    <FontAwesomeIcon className="icon" icon={faCommentAlt}/>  
                    <p>Chat</p>
                </div>
            </div>
            <div className="chat-section">
                <div className="chat-block">
                    <div className="sender">
                        Tu <small>10 PM</small>
                    </div>
                    <p className="msg">Hola!</p>
                </div>
            </div>
            <div className="send-msg-section">
                <input placeholder="Envia un mensaje"></input>
                <FontAwesomeIcon className="icon" icon={faPaperPlane}/>
            </div>
        </div>
    )
}

export default Messages;
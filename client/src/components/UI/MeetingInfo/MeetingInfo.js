import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCopy,
    faTimes,
    faUser,
    faShieldAlt
} from '@fortawesome/free-solid-svg-icons';
import './MeetingInfo.scss';

const MeetingInfo = () =>{
    return (
        <div className="meeting-info-block">
            <div className="meeting-header">
                <h3>Tu reunion esta creada</h3>
                <FontAwesomeIcon className="icon" icon={faTimes}/>
            </div>
            <button className="add-people-btn"><FontAwesomeIcon className="icon" icon={faUser}/> Añade gente</button>
            <p className="info-text">or comparte el link con quienes quieras en tu reunion</p>
            <div className="meet-link">
                <span>URL</span>
                <FontAwesomeIcon className="icon" icon={faCopy}/>
            </div>
            <div className="permission-text">
                <FontAwesomeIcon className="icon" icon={faShieldAlt}/>
                <p className="small-text">Las personas que usen tu link necesitaran tu permiso para entrar</p>
            </div>
            <p className="small-text">Ingresate como adan141098@hotmail.com</p>
        </div>
    )
}

export default MeetingInfo;
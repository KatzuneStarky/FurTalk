import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVideo,
    faMicrophone,
    faPhone,
    faAngleUp,
    faClosedCaptioning,
    faDesktop,
    faMicrophoneSlash
} from '@fortawesome/free-solid-svg-icons';
import './CallPageFooter.scss';

const CallPageFooter = () =>{
    return (
        <div className="footer-item">
            <div className="left-item">
                <div className="icon-block">
                    Detalles de la llamada <FontAwesomeIcon className="icon" icon={faAngleUp}/>
                </div>
            </div>
            <div className="center-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faMicrophone}/>
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faPhone}/>
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon" icon={faVideo}/>
                </div>
            </div>
            <div className="right-item">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faClosedCaptioning}/>
                    <p className="title">Activar Subtitulos</p>
                </div>
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faDesktop}/>
                    <p className="title">Presentar</p>
                </div>   
            </div>
        </div>
    )
}

export default CallPageFooter;
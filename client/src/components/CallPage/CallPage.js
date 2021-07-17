import CallPageHeader from '../UI/CallPageHeader/CallPageHeader';
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter';
import MeetingInfo from '../UI/MeetingInfo/MeetingInfo';
import Messages from '../UI/Messages/Messages';
import './CallPage.scss';
const CallPage = () => {
    return(
        <div className="callpage-container">
            <video className="video-container" src="" controls></video>

            <CallPageHeader />
            <CallPageFooter /> 
            <MeetingInfo />
            <Messages />
        </div>
    )
}

export default CallPage;
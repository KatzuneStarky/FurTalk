import {useHistory, useParams} from 'react-router-dom';
import CallPageHeader from '../UI/CallPageHeader/CallPageHeader';
import CallPageFooter from '../UI/CallPageFooter/CallPageFooter';
import MeetingInfo from '../UI/MeetingInfo/MeetingInfo';
import Messages from '../UI/Messages/Messages';
import './CallPage.scss';
import { useEffect, useReducer, useState } from 'react';
import MessageListReducer from '../../reducers/MessageListReducer';
import Peer from "simple-peer";
import {getRequest, postRequest} from './../../utils/apiRequest';
import {BASE_URL, GET_CALL_ID, SAVE_CALL_ID} from './../../utils/apiEdnPoints';
import io from 'socket.io-client';

let peer = null;
const socket = io.connect("https://localhost:6379");
const initialState = [];

const CallPage = () => {
    const history = useHistory();
    let { id } = useParams();
    const isAdmin = window.location.hash == "#init" ? true : false;
    const url = `${window.location.origin}${window.location.pathname}`;
    let alertTimeout = null;
  
    const [messageList, messageListReducer] = useReducer(
      MessageListReducer,
      initialState
    );
  
    const [streamObj, setStreamObj] = useState();
    const [screenCastStream, setScreenCastStream] = useState();
    const [meetInfoPopup, setMeetInfoPopup] = useState(false);
    const [isPresenting, setIsPresenting] = useState(false);
    const [isMessenger, setIsMessenger] = useState(false);
    const [messageAlert, setMessageAlert] = useState({});
    const [isAudio, setIsAudio] = useState(true);

    useEffect(() => {
        if(isAdmin){
            setMeetInfoPopup(true);
        }
        initWebRTC();
        socket.on("code", (data) => {
            if (data.url === url) {
              peer.signal(data.code);
            }
          });
    }, []);

    const getReciverCode = async () => {
        const response = await getRequest(`${BASE_URL}${GET_CALL_ID}/${id}`);
        if(response.code){
            peer.signal(response.code);
        }
    };

    const initWebRTC = () =>{
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
        }).then((stream) => {
            setStreamObj(stream);
            peer = new Peer({
                initiator: isAdmin,
                trickle: false,
                stream: stream
            });

            if(!isAdmin){
                getReciverCode();
            }

            peer.on("signal", async (data) => {
                if(isAdmin){
                    let payload = {
                        id,
                        signalData: data
                    };
                    await postRequest(`${BASE_URL}${SAVE_CALL_ID}`, payload);
                }else{
                    socket.emit("code", data, (cbData) => {
                        console.log("code sent");
                    });
                }
            });

            peer.on("connect", () => {
                console.log("peer conected");
            });

            peer.on("stream", (stream) => {
                let video = document.querySelector("video");
                if("srcObject" in video){
                    video.srcObject = stream;
                }else{
                    video.src = window.URL.createObjectURL(stream);
                }
                video.play();
            });
        }).catch(() => {
            console.log("error");
        });
    };

    const screenShare = () => {
        navigator.mediaDevices
          .getDisplayMedia({ cursor: true })
          .then((screenStream) => {
            peer.replaceTrack(
              streamObj.getVideoTracks()[0],
              screenStream.getVideoTracks()[0],
              streamObj
            );
            setScreenCastStream(screenStream);
            screenStream.getTracks()[0].onended = () => {
              peer.replaceTrack(
                screenStream.getVideoTracks()[0],
                streamObj.getVideoTracks()[0],
                streamObj
              );
            };
            setIsPresenting(true);
          });
      };
    
      const stopScreenShare = () => {
        screenCastStream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
        peer.replaceTrack(
          screenCastStream.getVideoTracks()[0],
          streamObj.getVideoTracks()[0],
          streamObj
        );
        setIsPresenting(false);
      };

    return(
        <div className="callpage-container">
            <video className="video-container" src="" controls></video>

            <CallPageHeader />
            <CallPageFooter isPresenting={isPresenting}
            stopScreenShare={stopScreenShare}
            screenShare={screenShare} /> 
            {isAdmin && meetInfoPopup && (
                <MeetingInfo setMeetInfoPopup={setMeetInfoPopup} url={url} />
            )}
            <Messages />
        </div>
    )
}

export default CallPage;
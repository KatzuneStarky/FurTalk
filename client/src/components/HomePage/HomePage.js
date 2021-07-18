import {useHistory} from 'react-router-dom';
import './HomePage.scss';
import Header from '../UI/Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faVideo,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import shortid from 'shortid';
const HomePage = () => {
    const history = useHistory();
    const startCall = () => {
        const uid = shortid.generate();
        history.push(`/${uid}#init`);
    }

    return(
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2>The standard Lorem Ipsum passage, used since the 1500s</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <div className="action-btn">
                            <button className="btn green" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo}/>
                                Nueva meeting
                            </button>
                                <div className="input-block">
                                    <div className="input-section">
                                        <FontAwesomeIcon className="icon-block" icon={faKeyboard}/>
                                        <input placeholder="Ingresa un codigo o un link"/>
                                    </div>
                                    <button className="btn no-bg">Ingresar</button>
                                </div> 
                        </div>                      
                    </div>
                    <div className="help-text">
                        <a href="">Conoce mas</a> acerca de FurTalk VideoCall
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/db1ce12a-a00b-43cd-b717-5ef6209bb4f0/de35fpz-cd8ffd52-6c9c-456d-8fa9-b564d343b071.jpg/v1/fill/w_1280,h_1280,q_75,strp/bna___nazuna__fanart__by_tricksonlee_de35fpz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2RiMWNlMTJhLWEwMGItNDNjZC1iNzE3LTVlZjYyMDliYjRmMFwvZGUzNWZwei1jZDhmZmQ1Mi02YzljLTQ1NmQtOGZhOS1iNTY0ZDM0M2IwNzEuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.oIxsBdvg-HrpKXaZhf7SGOUI1Y_FEmKxnVC43-z4fz8" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
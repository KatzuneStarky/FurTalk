import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faQuestionCircle,
    faExclamationCircle,
    faCog
} from '@fortawesome/free-solid-svg-icons';
import './Header.scss';
const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d22abed3-8e48-452b-967d-71789d91774d/de9pxao-f5df3a10-7665-4a32-a773-3c5be2317827.png/v1/fill/w_1280,h_1282,q_80,strp/nazuna_hiwatashi__bna__by_furvok_de9pxao-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MiIsInBhdGgiOiJcL2ZcL2QyMmFiZWQzLThlNDgtNDUyYi05NjdkLTcxNzg5ZDkxNzc0ZFwvZGU5cHhhby1mNWRmM2ExMC03NjY1LTRhMzItYTc3My0zYzViZTIzMTc4MjcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.KH8A1cvTfabZxCIj3ZDhOd2fDVi0joAgA9b9hB7S_t0"/>
                <span className="help-text">FurTalk</span>
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon = {faQuestionCircle}/>
                <FontAwesomeIcon className="icon-block" icon = {faExclamationCircle}/>
                <FontAwesomeIcon className="icon-block" icon = {faCog}/>
            </div>
        </div>
    )
}

export default Header;
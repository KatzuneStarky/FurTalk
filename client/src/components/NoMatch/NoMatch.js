import Header from './../UI/Header/Header';
import { Link } from 'react-router-dom';
import './NoMatch.scss';
const NoMatch = () => {
    return(
        <div className="no-match">
            <Header />
            <div className="no-match_content">
                <h2>CODIGO INGRESADO INVALIDO</h2>
                <div className="action-btn">
                    <Link className="btn green" to="/">
                        Regresar a la pagina principal
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NoMatch;
import './HomePage.scss';
import Header from '../UI/Header/Header';
const HomePage = () => {
    return(
        <div className="home-page">
            <Header />
            <div className="body">
                <div className="left-side">
                    <div className="content">
                        <h2></h2>
                    </div>
                </div>
                <div className="right-side"></div>
            </div>
        </div>
    )
}

export default HomePage;
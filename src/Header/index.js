import { Link } from 'react-router-dom';
import './styles.css'

function Header() {
    return (
        <>
            <div className="headerContainer">
                <Link className="linkButton"to="/">
                    <h3 className="headerTitle">Techs lab - teste</h3>
                </Link>
            </div>
            <div className="funcionalitiesContainer">
                <Link className="navigateButton" to="/func1-page">Funcionalidade 1</Link>
                <Link className="navigateButton" to="/func2-page">Funcionalidade 2</Link>
                <Link className="navigateButton" to="/func3-page">Funcionalidade 3</Link>
                <Link className="navigateButton" to="/func4-page">Funcionalidade 4</Link>
            </div>
        </>
    )
}
export default Header;
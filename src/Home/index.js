import { ReactComponent as MainImage } from '../Assets/mainImage.svg';
import './styles.css'

function Home() {
    return (
        <>            
            <div className="mainContent">
                <MainImage className="mainImage" />
                <p>Essa página apresentará todas as funcionalidades solicitadas pela empresa TechsLab </p>
                <p>para o processo seletivo para desenvolvedor</p>
            </div>

        </>
    )
}
export default Home;
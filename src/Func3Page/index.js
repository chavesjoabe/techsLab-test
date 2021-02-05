import { useState } from "react";
import { ReactComponent as AccessGrantedImage } from '../Assets/acessoPermitido.svg';
import { ReactComponent as AccessDeniedImage } from '../Assets/acessoNegado.svg';
import './styles.css';

function Func3Page() {
    const [validation, setValidation] = useState(0);

    const ageValidation = () => {
        const age = document.getElementById('age')
        if (parseInt(age.value) < 18) {
            setValidation(1);
        } else {
            setValidation(2);
        }
    }

    return (

        <>
            <div className="func3Container">
                <h1>Verificador de idade</h1>
                <input className="inputItem" type="number" placeholder="Digite sua idade" id="age" />
                <input className="inputBtn" type="button" onClick={ageValidation} value="Verificar" />
                <div className="result" >{validation === 1 ?
                    (<div className="resultContainer">
                        <div className="accessDeniedContainer">
                            <h2>Acesso Negado</h2>
                        </div>
                        <AccessDeniedImage className="images" />
                    </div>)
                    : validation === 2 ?
                        (<div className="resultContainer">
                            <div className="accessGrantedContainer">
                                <h2>Acesso Permitido</h2>
                            </div>
                            <AccessGrantedImage className="images" />
                        </div>)
                        : " "}</div>
            </div>
        </>
    )
}
export default Func3Page;
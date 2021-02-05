import { ReactComponent as Func2Image } from '../Assets/func2Image.svg'
import './styles.css';

function Func2Page() {
    const calculate = ()=>{
        const numberOne = document.getElementById('numberOne')
        const numberTwo = document.getElementById('numberTwo')
        const operator = document.getElementById('operator')
        const result = document.getElementById('result')
        let opResult = 0

        if(operator.value === '+'){
            opResult = parseInt(numberOne.value) + parseInt(numberTwo.value)
        }else if(operator.value === '-'){
            opResult = parseInt(numberOne.value) - parseInt(numberTwo.value)
        }else if(operator.value === '*'){
            opResult = parseInt(numberOne.value) * parseInt(numberTwo.value)
        }else if(operator.value === '/'){
            opResult = parseInt(numberOne.value) / parseInt(numberTwo.value)
        }else{
            window.alert('operaçao invalida')
        }

        result.innerHTML = opResult;
    }

    return (
        <>
            <div className="func2Container">
                <Func2Image className="func2MainImage" />
                <div className="calculator container">
                    <input className="inputItem" id="numberOne" placeholder="Digite o primeiro numero" />
                    <input className="inputItem" id="operator" placeholder="Digite a operação" />
                    <input className="inputItem" id="numberTwo" placeholder="Digite o segundo numero" />
                    <button className="calculate-btn" onClick = { calculate }>Calcular</button>
                    <div id="result">  </div>
                </div>
            </div>
        </>
    )
}
export default Func2Page;
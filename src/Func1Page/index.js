import { useState } from 'react';
import './styles.css';
import { ReactComponent as Func1Image } from '../Assets/func1Image.svg'



function Func1Page() {

    const [pressed, setPressed] = useState(false);
    const [numbers, setNumbers] = useState([8, 4, 6, 9, 2, 5, 10, 7, 1, 3]);
    const numberName = ["um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"];


    const isPressed = () => {
        if (pressed === false) {
            setPressed(true)
            setNumbers(numbers.sort(function (a, b) { return a - b }));
        }
        else setPressed(false)
    }
    return (
        <>
            <div className="container">
                <Func1Image className="func1Image" />
                <div className="arrayContainer">
                    <h1>{`[ ${numbers} ]`}</h1>
                </div>
                <button className="toggleButton" onClick={isPressed}>Reordenar</button>
                {pressed ? numbers.map(item =>
                        <div className="number-result">
                            {`${item} - ${numberName[item-1]}`}
                        </div>
                    )
                    : " "}


            </div>


        </>
    )
}
export default Func1Page;
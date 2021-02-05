import { useState } from "react";
import './styles.css';

function Func4Page() {
    const [pressed, setPressed] = useState(false)

    const numbers = []
    for (let i = 1; i <= 100; i++) {
        numbers.push(i)
    }

    const pressVerifier = () => {
        if (pressed === false) {
            setPressed(true)
        } else {
            setPressed(false)
        }
        console.log(pressed)
    }
    return (
        <>
            <div className="func4Container">
                <button className="generate-btn" onClick={pressVerifier}>gerar</button>
                <div className="result-container">
                    {pressed ? numbers.map(item =>
                        <div key={item} className="result-div">
                            {item % 3 === 0 && item % 5 == 0 ? "FizzBuzz" : item % 3 === 0 ? "Fizz" : item % 5 === 0 ? "Buzz" : item}
                        </div>)
                        : " "}
                </div>
            </div>


        </>
    )
}
export default Func4Page;
import { useState } from 'react'
import { evaluate } from 'mathjs'

import './App.css'

function App() {
  const [input, setInput] = useState('0')

  return (
    <div className='App'>
      <div className='calculator-container'>
        <input
          type='text'
          className='calculator-screen'
          value={input}
          placeholder='0'
          disabled
        />
        <div className='calculator-keys'>
          <button className='calculator-number-key key-1' onClick={() => setInput((input) => input + "1")}>1</button>
          <button className='calculator-number-key key-2' onClick={() => setInput((input) => input + "2")}>2</button>
          <button className='calculator-number-key key-3' onClick={() => setInput((input) => input + "3")}>3</button>
          <button className='calculator-number-key key-4' onClick={() => setInput((input) => input + "4")}>4</button>
          <button className='calculator-number-key key-5' onClick={() => setInput((input) => input + "5")}>5</button>
          <button className='calculator-number-key key-6' onClick={() => setInput((input) => input + "6")}>6</button>
          <button className='calculator-number-key key-7' onClick={() => setInput((input) => input + "7")}>7</button>
          <button className='calculator-number-key key-8' onClick={() => setInput((input) => input + "8")}>8</button>
          <button className='calculator-number-key key-9' onClick={() => setInput((input) => input + "9")}>9</button>
          <button className='calculator-number-key key-0' onClick={() => setInput((input) => input + "0")}>0</button>
          <button className='calculator-operator-key key-add' onClick={() => setInput((input) => input + "+")}>+</button>
          <button className='calculator-operator-key key-minus' onClick={() => setInput((input) => input + "-")}>-</button>
          <button className='calculator-operator-key key-times' onClick={() => setInput((input) => input + "*")}>*</button>
          <button className='calculator-operator-key key-divide' onClick={() => setInput((input) => input + "/")}>/</button>
          <button className='calculator-operator-key key-dot' onClick={() => setInput((input) => input + ".")}>.</button>
          <button className='calculator-operator-key key-equal' onClick={() => setInput((input) => {
            try {
              const evaluation = evaluate(input)
              return evaluation
            } catch {
              return '0'
            }
          })}>=</button>
          <button className='calculator-operator-key key-c' onClick={() => setInput('')}>C</button>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import { Container, Content, Row } from './styles'
import { Input } from "./components/Input"
import { Button } from './components/Button'

function App() {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [expression, setExpression] = useState('')
  const [result, setResult] = useState('')

  const handleClear = () => {
    setCurrentNumber("0")
    setFirstNumber('0')
    setResult('')
  }

  const handleAddNumber = (number: string) => {
    setResult('')
    setCurrentNumber("0")
    setCurrentNumber(prev => `${number}${prev === '0' ? '': prev }`)
  }

  const handleCalcNumbers = (item: string) => {
    if (firstNumber === '0') { 
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
    }
    setExpression(item)
  }

  const handleResult = () => {
    const calc = expression;

    console.log(`expressao${expression}`)

    if (calc == "+") {
      setResult(String(Number(firstNumber) + Number(currentNumber)))
    } else if (calc == "-") {
      setResult(String(Number(firstNumber) - Number(currentNumber)))
    } else if (calc == "X") {
      setResult(String(Number(firstNumber) * Number(currentNumber)))
    } else if (calc == "/") {
      setResult(String(Number(firstNumber) / Number(currentNumber)))
    } else if (calc == "%") {
      setResult(String(Number(firstNumber) % Number(currentNumber)))
    }
    setExpression('')
  }     

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={result !== '' ? result : currentNumber } />
          <Row>
            {
              ["X", "/", "%", "C"].map((item, index) => {
                return <Button key={index} label={item} onClick={() => item === "C" ? handleClear() : handleCalcNumbers(item)} />
              })
            }
          </Row>
          <Row>
            {
              ["9", "8", "7", "-"].map((item, index) => {
                return <Button key={index} label={item} onClick={() => item == "-" ? handleCalcNumbers(item) : handleAddNumber(item)} />
              })
            }
          </Row>
          <Row>
            {
              ["4", "5", "6", "+"].map((item, index) => {
                return <Button key={index} label={item} onClick={() => item == "+" ? handleCalcNumbers(item) : handleAddNumber(item)} />
              })
            }
          </Row>
          <Row>
            {
              ["1", "2", "3", "="].map((item, index) => {
                return <Button key={index} label={item} onClick={() => item == "=" ? handleResult() : handleAddNumber(item)} />
              })
            }
            </Row>
        </Content>
      </Container>
    </div>
  )
}

export default App

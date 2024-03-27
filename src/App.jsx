import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  const increment = () => setCounter(counter + 1)
  const desincrement = () => setCounter(counter - 1)
  const setZero = () => setCounter(0)

  return (
    <>
      <Display counter = {counter} />
      <Button onClick = {increment}  text = {"sum"}/>
      <Button onClick = {desincrement} text = {"rest"}/>
      <Button onClick = {setZero}  text = {"reset"}/>
    </>
  )
}

const Display = ({counter}) => <> <h1>{counter}</h1> </>

const Button = ({onClick, text}) =>{

  return(
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default App
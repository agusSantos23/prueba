import { useState } from 'react'

const History = (props) => {

  if(props.allClicks.length === 0){
    return (
      <>
        The app is used by pressing the button
      </>
    )
  }

  return(
    <>
      button press history: {props.allClicks.join(' ')}
    </>
  )

}

const Button = ({ handleClick, text}) => (
  <>
    <button onClick={handleClick}>
      {text}
    </button>
  </>
)

const App = () => {

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total,setTotal] = useState(0)


  const handLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(updatedRight + left)
  }

  return(
    <>
      {left}

      <Button handleClick={handLeftClick} text={"left"} />
      <Button handleClick={handRightClick} text={"right"} />

      {right}

      <History allClicks = {allClicks} />
    </>
  )
  
}





export default App
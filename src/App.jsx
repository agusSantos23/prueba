import { useState } from 'react'

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
      <button onClick={handLeftClick}>left</button>
      <button onClick={handRightClick}>right</button>
      {right}

      <p>{allClicks.join(' ')}</p>
      <p>total = {total}</p>
    </>
  )
  
}



export default App
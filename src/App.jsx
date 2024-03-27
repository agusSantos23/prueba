import { useState } from 'react'

const App = () => {


  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handLeftClick = () =>{
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handRightClick = () =>{
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  return(
    <>
      {clicks.left}
      <button onClick={handLeftClick}>
        left
      </button>

      <button onClick={handRightClick}>
        right
      </button>
      {clicks.right}
    </>
  )
  
}



export default App
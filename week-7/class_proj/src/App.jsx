import { useContext, useState } from "react"
import { Context } from "react";
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <CountContext.Provider value={{count,setCount}}>
      <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <Buttons setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  const setCount = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons() {
const count = useContext(CountContext);
const setCount = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App
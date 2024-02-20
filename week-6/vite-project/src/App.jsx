import { useState } from "react";
import { useEffect } from "react";

function App() {
  let [num,setNum] = useState(0);
  let [sum,setSum] = useState(1);
  
  let count=useMemo(()=>{
  for(let i=1;i<=sum;i++){
    sum=sum+i;
  }
  return count;
},[sum]);
  return <div>
    <input onChange={function(e){
      setSum(e.target.value);
    }} />
    <br/>
    Sum from 1 to {sum} is {count}
    
    <h5>Sum is {sum}</h5>
    <button onClick={function(){
      setNum(num+1);
    }}>Counter({num})</button>
  </div>
}


export default App;
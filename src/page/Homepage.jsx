import React, { useState } from "react";

function Homepage() {
    
    const [count , setcount] = useState(0)
    const increase = ()=>{
        setcount(count+1)
    }
    const decrease = ()=>{
        setcount(count -1)
    }
  return (
    <div className="counter" >
    <div>
       <button onClick={increase} type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">increment</button>
    </div>
        <input value={count} type="number" id="show" /> 
        <div>
        <button onClick={decrease} type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">decrement</button>
     </div>
     </div>
  )
}

export default Homepage;
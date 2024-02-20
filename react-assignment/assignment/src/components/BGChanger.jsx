import React, { useState } from "react";


const BGChanger=()=>{
    const [color,setColor] = useState("");
    
    const handleChange = (color)=>{
            setColor(color);
    }
    return(
    <div className={`w-full min-h-screen bg-${color}`}>
        <div className="w-md absolute inset-x-0 bottom-10 flex flex-row justify-evenly shadow-md ">
    <button className="bg-red-700 py-2 px-8 rounded-full" onClick={()=> handleChange("red-700")}>Red</button>
    <button className="bg-yellow-400 py-2 px-8 rounded-full " onClick={()=> handleChange("yellow-400")}>Yellow</button>
    <button className="bg-black text-white py-2 px-8 rounded-full " onClick={()=> handleChange("black")}>Black</button>
    <button className="bg-purple-600 py-2 px-8 rounded-full" onClick={()=> handleChange("purple-600")}>Purple</button>
    <button className="bg-green-600 py-2 px-8 rounded-full" onClick={()=> handleChange("green-600")}>Green</button>
    <button className="bg-blue-600 py-2 px-8 rounded-full" onClick={()=> handleChange("blue-600")}>Blue</button>
    <button className="bg-orange-600 py-2 px-8 rounded-full" onClick={()=> handleChange("orange-600")}>Orange</button>
   
    </div>
    </div>
);
    }


export default BGChanger;
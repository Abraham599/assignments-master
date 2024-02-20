import React, { useState } from "react";

const Para = ()=>{
    const [length, setLength] = useState();
    const [paragraph, setParagraph] = useState("");

    async function generate(){
        const response = await fetch(`https://random-word-api.vercel.app/api?words=${length}`);
        const data = await response.json();
        const sentence = data.join(' ');
      
        setParagraph(sentence);
    }

    return(
        <div className="w-full min-h-screen flex flex-col items-center justify-center shadow-md max-w-md mx-auto mt-8">
            <div className="p-10 text-2xl font-semibold">Paragraph Generator</div>
            <div className="p-10 flex flex-row items-center space-x-4">
            <input type="text" value={length} onChange={(e)=>setLength(parseInt(e.target.value))} placeholder="Enter number of words" className="border border-solid border-black rounded-md w-96"/>
            <button onClick={generate} className="bg-black text-white py-2 px-5 rounded-full"> Generate </button>
            </div>
            <p  className="overflow-auto border border-black border-solid h-72 w-96  p-10 border-4 rounded-md inline-block">{paragraph}</p>
        </div>
    );
};

export default Para;
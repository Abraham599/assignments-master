import { useRef } from "react";

const Login = ()=>{
const inputRef1 = useRef();
const inputRef2 = useRef();
const inputRef3 = useRef();
const inputRef4 = useRef()

  

    return( 
    <div className="dark:bg-slate-800 w-full min-h-screen flex items-center justify-center text-sky-400">
    <div className="border border-white border-solid p-10 rounded-md h-96 w-96 flex flex-col items-center justify-around ">
        <div className="font-semibold text-3xl">Login via OTP</div>
        <div className="flex flex-row space-x-3 items-center justify-around text-black">
        <input
          ref={inputRef1}
          type="text"
          className="border border-white bg-white h-12 w-12 rounded-md text-center text-lg"
          maxLength="1"

          onChange={() => inputRef2.current.focus()}
        /> 
        <input
          ref={inputRef2}
          type="text"
          className="border border-white bg-white h-12 w-12 rounded-md text-center text-color text-xl"
          maxLength="1"
          onChange={() => inputRef3.current.focus()}
        /> 
         <input
          ref={inputRef3}
          type="text"
          className="border border-white bg-white h-12 w-12 rounded-md text-center text-color text-xl"
          maxLength="1"
          onChange={() => inputRef4.current.focus()}
        /> 
         <input
          ref={inputRef4}
          type="text"
          className="border border-white bg-white h-12 w-12 rounded-md text-center text-color text-xl"
          maxLength="1"
        
        /> 
           </div>    
        
        <button  className="bg-black text-white py-2 px-5 rounded-full" > Send OTP </button>

    </div>
</div>);
};


export default Login;
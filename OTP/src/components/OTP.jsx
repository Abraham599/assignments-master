import {useNavigate } from 'react-router-dom';

const OTP = ()=>{
    const navigate = useNavigate();
return(
    <div className="dark:bg-slate-800 w-full min-h-screen flex items-center justify-center text-sky-400">
        <div className="border border-white border-solid p-10 rounded-md h-96 w-96 flex flex-col items-center justify-around ">
            <div className="font-semibold text-3xl">Login with OTP</div>
            <input type="text"  placeholder="Enter your mobile number" className="border border-solid border-white rounded-md text-lg w-64 bg-slate-700	bottom-10"/>
            <button  className="bg-black text-white py-2 px-5 rounded-full" onClick={()=>navigate("/login")}> Send OTP </button>

        </div>
    </div>
)
};

export default OTP;
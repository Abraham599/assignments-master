import { useRecoilState, useRecoilValue } from "recoil";
import { NameAtom } from "./store/atoms/Name";
import { useNavigate } from "react-router-dom";

const BirthdayCard = ()=>{
    const [name,setName] = useRecoilState(NameAtom);
    const navigate = useNavigate();
return(
    <div className="w-full min-h-screen flex items-center justify-center dark:bg-slate-800">
        <div className="bg-amber-200 h-64 w-3/6 rounded-md flex flex-col space-y-4 items-center justify-around">
            <div className="text-2xl ">Enter Your Name</div>
            <input placeholder="Enter your name" className="border border-black bg-white text-base w-1/2"  onChange={(e)=>setName(e.target.value)}/>
            <button className="bg-black text-white py-2 px-5 rounded-full" onClick={()=>{
                navigate("/wishes");

            }}>Done</button>

        </div>
    </div>
);
};

export default BirthdayCard;
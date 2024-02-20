import { useRecoilValue } from "recoil";
import { NameAtom } from "./store/atoms/Name";

const Card = ()=>{
const name = useRecoilValue(NameAtom);

return (
    <div className="w-full min-h-screen dark:bg-slate-800 flex flex-col items-center justify-around" >
        <div className="bg-amber-200 h-56 w-64 rounded-md flex items-center justify-center">Happy Birthday {name}</div>
        <div className="bg-red-300 h-56 w-64 rounded-md flex items-center justify-center">Happy Birthday {name}</div>

    </div>
)
};

export default Card;
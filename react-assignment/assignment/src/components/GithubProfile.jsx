import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import codebender from "../assets/codebender.jpg";
import { userDataAtom } from "./store/atoms/UserData";





const GithubProfile = () => {
  const [UserDataState, setUserData] = useRecoilState(userDataAtom);
  const fetchData = async ()=>{
    const response = await fetch(`https://api.github.com/users/Faizan-Nabi`);
    const data = await response.json();
    
    setUserData({
        name:data.name,
        username: data.login,
        repos: data.public_repos,
        bio: data.bio,
        avatar:data.avatar_url,
        followers: data.followers,
        following: data.following
    });
    
    };

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="w-full min-h-screen flex items-center justify-center dark:bg-slate-800">
        <div className="w-11/12 max-w-xs bg-white  rounded-lg shadow-md flex flex-col items-center relative h-130">
          <div className="bg-blue-500 h-40 w-full flex flex-col items-center justify-center relative">
          <img src={UserDataState.avatar} alt="CodeBender" className="mt-40 h-20 w-20 rounded-full" />
          </div>
          <div className="bg-white-500 h-60 w-full flex flex-col grow items-center justify-center relative space-y-4 ">
           <div className="order-1 flex space-x-3 "><span className="		 font-bold 			">{UserDataState.name}</span> <span className="text-slate-400	">{UserDataState.username}</span></div>
            <div className="order-2 text-sm text-slate-400 overflow-auto">{UserDataState.bio}</div>
  
           
            <div className=" order-3 translate-y-10 flex items-center relative flex-row space-x-20 border-t border-gray-300 pt-5">
              
              <div className="flex flex-col items-center justify-center"><div className="font-bold 	">{UserDataState.followers}</div><div className="text-xs text-slate-400	">Followers</div></div>
              <div className="flex flex-col items-center justify-center"><div className="font-bold ">{UserDataState.following}</div><div className="text-xs text-slate-400	">Following</div></div>
              <div className="flex flex-col items-center justify-center"><div className="font-bold ">{UserDataState.repos}</div><div className="text-center text-xs text-slate-400	">Repositories</div></div>
            </div>
            
          </div>
        </div>
        </div>
    );
  };

export default GithubProfile;
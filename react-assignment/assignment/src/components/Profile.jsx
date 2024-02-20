import React from "react";
import codebender from "../assets/codebender.jpg";

const Profile = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="w-full max-w-xs bg-white  rounded-lg shadow-md flex flex-col items-center relative h-130">
        <div className="bg-blue-500 h-40 w-full flex flex-col items-center justify-center relative">
        <img src={codebender} alt="CodeBender" className="mt-40 h-20 w-20 rounded-full" />
        </div>
        <div className="bg-white-500 h-60 w-full flex flex-col grow items-center justify-center relative space-y-4 ">
         <div className="order-1 flex space-x-3 "><span className="		 font-bold 			">Abraham Richard</span> <span className="text-slate-400	">21</span></div>
          <div className="order-2 text-sm text-slate-400		">Puducherry</div>

         
          <div className=" order-3 translate-y-10 flex items-center relative flex-row space-x-20">
            
            <div className="flex flex-col items-center justify-center"><div className="font-bold 	">83K</div><div className="text-xs text-slate-400	">Followers</div></div>
            <div className="flex flex-col items-center justify-center"><div className="font-bold ">803K</div><div className="text-xs text-slate-400	">Likes</div></div>
            <div className="flex flex-col items-center justify-center"><div className="font-bold ">1.4K</div><div className="text-xs text-slate-400	">Photos</div></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;

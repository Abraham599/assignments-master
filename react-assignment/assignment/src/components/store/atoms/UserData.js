import { atom } from "recoil";


export const userDataAtom = atom({
    key: 'userDataAtom',
    default:{
        name:'',
        username:'',
        bio:'',
        avatar:'C:\Users\abrah\Documents\assignments-master\react-assignment\assignment\src\assets\codebender.jpg',
        repos:0,
        followers:0,
        following:0,
    },
});
import { selector } from "recoil";
import { atom } from "recoil";


export const todoAtom = atom({
    key: "todoAtom",
    default: []
});

export const filterAtom = atom({
    key: "filterAtom",
    default: ""
});

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get})=>{
            const filter = get(filterAtom);
            const todoList = get(todoAtom);
            return todoList.filter(x=> (x.title && x.title.includes(filter)) || (x.desc && x.desc.includes(filter)));
    }
});
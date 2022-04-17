import { CITY } from "./action"


const initState={
city:[],
}

export const cityReducer = (store=initState,{type,payload}) =>{

    switch(type){

        case CITY:
            return {...store,city:payload}
            default:
                return store; 
    }
}
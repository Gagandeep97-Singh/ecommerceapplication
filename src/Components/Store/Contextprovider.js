import React,{createContext} from 'react';

const contextprovider=createContext({
    items:[],
    totalamount:0,
    additems:()=> {},
    removeitem:()=>{}
});

export default contextprovider
import React,{useReducer} from 'react'
import contextprovider from './Contextprovider'

const initialState={
    items: [],
    totalamount: 0
}



const reducer = (state,action) => {
   if (action.type ==='Add'){
    const updatedItems =state.items.concat(action.item);
    const updatedtotalamount=state.totalamount+action.item.price
    console.log(updatedtotalamount)
    return{
        items:updatedItems,
        totalamount:updatedtotalamount
    }
   }
   else if(action.type ==='Remove'){
   const updatedremoveitems=state.items.filter(item => item.id!==action.id)
   const updatedtotalamount=state.totalamount-action.price
   return{
    items:updatedremoveitems,
    totalamount:updatedtotalamount

}
   }

   return initialState
}







const Reduceprovider = (props) => {
 
const [cartstate,dispach]= useReducer(reducer,initialState)



const additemtocart=(item)=>{
    dispach({type: 'Add',item: item})
}


const removeitemtocart=(id,price)=>{
    dispach({type: 'Remove',id:id,price:price})
}


const contextitems={
    items:cartstate.items,
    totalamount:cartstate.totalamount,
    additems:additemtocart,
    removeitem:removeitemtocart
}

  return (
    <contextprovider.Provider value={contextitems}>
        {props.children}
    </contextprovider.Provider>
  )
}

export default Reduceprovider


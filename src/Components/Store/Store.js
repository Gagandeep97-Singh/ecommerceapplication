import React from 'react'
import Contextdata from './Contextdata'
import product_data from '../Data/Data'
const Store = (props) => {
  return (
    <Contextdata.Provider value={product_data}>
        {props.children}
    </Contextdata.Provider>
  )
}

export default Store
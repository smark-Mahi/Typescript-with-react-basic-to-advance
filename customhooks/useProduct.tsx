import React from 'react'
import { useContext } from 'react'
import productContext from '../context/Productsprovider'
import {useProductContextType} from '../context/Productsprovider'
const useProrduct = ():useProductContextType => {
  return useContext(productContext)
}

export default useProrduct
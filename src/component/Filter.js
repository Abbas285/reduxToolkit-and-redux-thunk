import React from 'react'
import { useDispatch } from 'react-redux'
import {filteruserdata} from './../reducers/userReducer'
const Filter = () => {
const dispatch=useDispatch()
    const handlechange=(e)=>{

dispatch(filteruserdata(e.target.value))
    }
  return (
    <>
    <input
    type='text'
    name=''
    className='form-control mb-3'
    placeholder='Search user by name'
    onChange={handlechange}
    />
    
    </>
  )
}

export default Filter
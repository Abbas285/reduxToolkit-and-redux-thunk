import React,{useRef,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import Users from './../component/users'
import Loader from './../component/Loder'
import { useSelector,useDispatch } from 'react-redux'
import FilterComponent from './../component/Filter'
// import {addUser} from '../reducers/userReducer'
import { getUser} from'../store/actions/userAction'

const Home = () => {
    const {users,loading}=useSelector(state=>state.users)
    console.log("redux state",users)

const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getUser())
},[])


  return loading?<Loader/>:<>
  <FilterComponent/>
  <table className='table table-hover'>
  <thead>
    <tr  ><th style={{textAlign:"center",fontSize:"25px",fontWeight:"500"}}>Redux toolkit</th></tr>
    <tr>
      <th>Sno</th>
      <th>Name</th>
      <th>UserName</th>
      <th>Email</th>
      <th>Details</th>
    </tr>
  </thead>
<tbody>
  {
   users.length>0 &&users.map((user,index)=>{
   return  <Users key={index} index={index} user={user} />
    })
  }
</tbody>
</table></>
}
export default Home

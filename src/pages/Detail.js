import React,{useEffect} from 'react'
import {useParams,Link} from 'react-router-dom'
import {getSingleuser} from './../store/actions/userAction'
import {useDispatch,useSelector} from 'react-redux'
import Loading  from './../component/Loder'

const Detail = () => {
  const dispatch=useDispatch()
  const {id}=useParams()

useEffect(()=>{
  dispatch(getSingleuser(id));
},[])

const {loading,user}=useSelector(state=>state.users)

  return  !loading?<>
  <Link to='/' className='btn btn-dark mb-3'>GoBack</Link>
  <div className='card'>
    <div className='card-header'>
<h3>
  <span className='text-info'>{user.name}</span>details
</h3>
  </div>
  <div className='card-body'>
    <div className='row mb-2'>
      <div className='col-3'>Name</div>
      <div className='col-9 text-end'>{user.name}</div>
      
    </div>
    <div className='row mb-2'>
      <div className='col-3'>Email</div>
      <div className='col-9 text-end'>{user.email}</div>
      
    </div>
    <div className='row mb-2'>
      <div className='col-3'>UserName</div>
      <div className='col-9 text-end'>{user.username}</div>
      
    </div>
    <div className='row mb-2'>
      <div className='col-3'>City</div>
      <div className='col-9 text-end'>{user.address.city}</div>
      
    </div>
    <div className='row mb-2'>
      <div className='col-3'>Website</div>
      <div className='col-9 text-end'>{user.website}</div>
      
    </div>
    <div className='row mb-2'>
      <div className='col-3'>Phone</div>
      <div className='col-9 text-end'>{user.phone}</div>
      
    </div>

  </div>
  </div></>:<Loading/>
}

export default Detail
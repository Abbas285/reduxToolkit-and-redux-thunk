import React from 'react'
import {Link }  from 'react-router-dom'
const users =({index,user})=>{
return  <tr key={index}>
<td>{index+1}</td>
  <td>{user.name}</td>
  <td>{user.username}</td>
  <td>{user.email}</td>
  <td><Link to={`/user/${user.id}`} className='btn btn-outline-success'>Details</Link></td>
</tr>
}
export default  users 

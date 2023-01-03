import React, { useEffect } from 'react';
// import useHistory from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// import { NavLink } from 'react-router-dom'

export default function Dashboard() {
   const navigate = useNavigate();
  useEffect(()=> {
    if (localStorage.getItem('username')) {
     // alert("right")
      //navigate("/Login")
      // history.push('./Login')
    }
    else {
     //    alert("wrong")
      navigate("/Login")
    }
  })
  //})
  const logout=()=>{
    localStorage.removeItem('username')
    localStorage.removeItem('psw')
    alert(" Logout sucess ... ")
    navigate("/Register")
  }

  return (
    <div className='container' >
      <h1>Dashboard page</h1> 
      <br/><br/>
      <h1>Welcome</h1> <h2>{localStorage.getItem('username')}</h2>
      <button type='button' onClick={logout}>LogOut</button>

    </div>
  )
}

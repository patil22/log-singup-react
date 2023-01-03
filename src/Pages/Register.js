import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Register() {
  const nav = useNavigate();
  // var alertval;
  // setTimeout(() => {
  // nav("/Login")
  // alert("You have to Login first")
  // navigate("/Login")
  // console.log(alertval)

  //  }, 0);

  // if(alertval === true)
  // {
  //   navigate("/Login")
  //   console.log("bbbaakak")
  // }
  //  const [va,setva] = useState()

  const [user, setuser] = useState()
  const usernameinput = () => {
    setuser("Username contain at least 6 character ,one uppercase & one lowercase ,one special & one numeric value is required i.e Gaurav@123")
  }

  const register = () => {
    var mailvalue = document.getElementById('email').value;
    var psw = document.getElementById('psw').value;
    localStorage.setItem('username', mailvalue)
    localStorage.setItem('psw', psw)

    if (mailvalue === "" || psw === "") {
      alert("Fill  content below form")
    }
    else {
      if (mailvalue.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,64}$/)) {

        nav("/Login")
      }
      else {
        alert('Invalid username')
      }

    }
    // if(passvalue === repeatpassval ){
    //  nav("/Login")
    //  // alert("jjjjj")
    // }
    // else{
    //   alert("Fill form")
    // }
    //  if(passvalue !== repeatpassval){
    // setva("Password not match")


  }
  // const email = (e)=>{
  //   var mailvaile = e.target.value;
  //   // localStorage.setItem("mail","mailvaile")

  // }
  return (
    <div>

      <form action="">
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <b>{user}</b>


          <hr />

          <label for="email"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="email" id="email" onChange={usernameinput} required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />


          <hr />

          {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
          <button type="submit" class="registerbtn" onClick={register}>Register</button>
        </div>

        {/* <div class="container signin">
                    <p>Already have an account? <a href="#">Sign in</a>.</p>
                  </div> */}
      </form>

    </div>
  )
}

import React,{useState} from 'react';
import './signin.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 

function Signin() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const history = useNavigate();
 var respons;

  const saveData = async() =>
{
    let formField = new FormData()
        formField.append('username',username)
        formField.append('password',password)
         await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/signin',
          data: formField
        }).then(response =>{  
           respons=response.status;
            console.log(respons);
          })
          // eslint-disable-next-line
if (respons==200){
        history("/dashboard") 
   }
   else{ 
    history("/signup")
}}

  return (
    <div className='ca'>
    <form>
        <h1 className='header1'><b>sign in </b></h1> 
        <h3 className='f1'>Username</h3>
      <input className='i1' type="text" name="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  /> 
      <h3 className='f1'>Password</h3>
      <input className='i1' type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  /> <br/><br/>
      <input className='in' type="checkbox" />Remember Me
      <br/><br/>
      <button className='b' type="button" onClick={saveData} >Save New User</button>
      <br/><br/>
      <a className='signin' href='/forgotpassword'>forgotpassword</a>
      </form>
    </div>
  );
}

export default Signin
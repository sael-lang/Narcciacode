import React,{useState} from 'react';
import './signup.css'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'; 
import countrydata from './countrydata.json';
import DatePicker from 'react-date-picker';

function Signup() {
  const [username,setUsername]=useState("");
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [password,setPassword]=useState("");
  const [repassword,setRepassword]=useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState("");
  const [country,setCountry]=useState("");
  const [DOB,setDOB]=useState(new Date());
  const history = useNavigate();
  var respons;
  
  const saveData = async() =>
{try{
    let formField = new FormData()
        formField.append('username',username)
        formField.append('fname',fname)
        formField.append('lname',lname)
        formField.append('password',password)
        formField.append('email',email)
        formField.append('phone',phone)
        formField.append('country',country)
        formField.append('DOB',DOB)
         await axios({
          method: 'post',
          url:'http://127.0.0.1:8000/',
          data: formField
        }).then(response =>{
          respons=response.status
          
        })// eslint-disable-next-line
        if (respons==200){
          history("/home") }

      }
      
       
   
    catch(er){
    history("/signup") }
}

  return (
    <div className='cat'>
    <form>
        <h1 className='header'><b>Hacker sign up </b></h1> 
        <div className='font1'><b>First Name</b></div><div><b>Last Name</b></div>
      <input className='input1' type="text" placeholder='Enter Your First Name' name="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}}  /> 
      <input className='input2' type="text" placeholder='Enter Your Last Name' name="lname" value={lname} onChange={(e)=>{setLname(e.target.value)}}  />
        <div className='font2'><b>Username </b></div>
      <input className='input3'  placeholder='Enter Your Username' type="text" name="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}}  /> 
      <div className='font2'><b>Email</b></div>
      <input className='input3'placeholder='Enter Your Email' type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      <div className='font2'><b>Password</b></div>
      <input className='input3'  placeholder='At Least 8 Characters ' type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  /> 
      <div className='font2'><b>Repeat password</b></div>
      <input className='input3' placeholder='Re-Enter Your Password' type="password" name="repassword" value={repassword} onChange={(e)=>{setRepassword(e.target.value)}}  />  
      <div className='font2'><b>Phone</b></div>
      <input className='input3'placeholder='Enter Your Phone' type="text" name="phone"  value={phone} onChange={(e)=>{setPhone(e.target.value)}}/> 
      <div className='font2'><b>Country</b></div>
      <select className='input4' onChange={(e)=>{setCountry(e.target.value)}} >
      <option value="">--Select Country--</option>
      {
        countrydata.map( record=>{
          return(
            <option key={record.value} value={record.label}>
              {record.label}
            </option>
          )
        })
      }
      </select>
      <div className='font2'><b>Date Of Birth</b></div>
      <DatePicker isClearable maxDate={new Date()} className='input4' onChange={(date)=>{ 
     setDOB(date)}} selected={DOB} value={DOB} /> <br /> <br />
         <input className='input5' type="checkbox" /> Do you <a href='http://google.com'>g</a> agree with our policy?
         <br /> <br />
      <button className='button' type="button" onClick={saveData} ><b>Save New User</b></button>
      </form>
    </div>
  );
}

export default Signup
import './dashboard.css'
import axios from 'axios';
import {useEffect,useState} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page B', uv: 300, pv: 2400, amt: 2400},{name: 'Page C', uv: 300, pv: 2400, amt: 2400},{name: 'Page D', uv: 200, pv: 2400, amt: 2400}];

function Landingpage () {
  const [usern,getusern]=useState('');
  const[scoren,getscoren]=useState('');
  const[taskn,gettaskn]=useState('');
   
 useEffect(()=>{
   axios.get('http://127.0.0.1:8000/showuser')
  .then((response) => {
    getusern(response.data)
  }); 
},[])
useEffect(()=>{
  axios.get('http://127.0.0.1:8000/showscore')
  .then((response) => {
    getscoren(response.data)
    console.log(response.data)});
},[])
useEffect(()=>{
  axios.get('http://127.0.0.1:8000/showtask')
  .then((response) => {
    gettaskn(response.data)
    console.log(response.data)});
},[])
  if (!usern) return "nothing"
  if(!scoren) return "nothing "
  if(!taskn) return "nothing "
  return (
      
      <>
      <div className='backg'>
      <div className='side1'>
      <div className='upper'>
      <div className='pa'> Leaders</div>
      <div> &nbsp;&nbsp;&nbsp;&nbsp;  </div>
        <div className='pa'> {scoren[0].username}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {scoren[0].score}</div>
        <div className='pa'> {scoren[1].username}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {scoren[1].score}</div>
        <div className='pa'> {scoren[2].username}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {scoren[2].score}</div>
        <div className='pa'> {scoren[3].username}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {scoren[3].score}</div>
        <div className='pa'> {scoren[4].username}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   {scoren[4].score}</div>
      </div>

      <div className='lower' >
      <LineChart width={400} height={200} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
      </div>
      </div>
<div className='middle1'>
<div className='profile'></div>
<div className='name1'>
<div className='par'>Score:{scoren[0].score}</div>
<div>Hi,<br/>{usern[0].fname} {usern[0].lname}</div>
</div>
  <div className='bo'>{taskn[0].name}</div>
  <div className='ao'>{taskn[1].name}</div>
  <div className='co'>{taskn[2].name}</div>
  <div className='bd'>{taskn[0].date}</div>
  <div className='a'>{taskn[1].date}</div>
  <div className='c'>{taskn[2].date}</div>
  <div className='bda'>{taskn[0].score}</div>
  <div className='aa'>{taskn[1].score}</div>
  <div className='caa'>{taskn[2].score}</div>
  <div className='bdad'>Points</div>
  <div className='aad'>Points</div>
  <div className='caad'>Points</div>
<div className='box1'>
</div>
<div className='box2'></div>
<div className='box3'></div>
<div className='sea'>search programs</div>
<div className='search'></div>
<p className='para'>D e b u g h i v e</p>
<div className='setting1'>
</div>
</div>
      </div>
      
      </>
    )
  }
  
  export default Landingpage
  
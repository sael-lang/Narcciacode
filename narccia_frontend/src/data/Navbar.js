import  './navbar.css'

const Navbar = () => {
  return (
    <> 
    <div className="topnav">
    <a className="ac" href="/home">DeBugHive</a>
  <a href="/home"><b>HOME</b></a>
  <a href="/home"><b>ABOUT US</b></a>
  <a href="/signup">DONATE US</a>
  <a className='active'  href="/signup">CONTACT US</a>
  <a href="/signin"><b>LOGIN</b></a>
  <a href="/signup"><b>SIGNUP</b></a>
  
</div>
    </>
  )
}

export default Navbar

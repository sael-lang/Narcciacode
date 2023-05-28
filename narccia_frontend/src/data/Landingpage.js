import './landingpage.css'
import Typewriter from "typewriter-effect";


const Landingpage = () => {
  return (
    <>  
    <div className="demo">
    <div className='h11'><b>DeBugHive</b></div>
    <div className='h12'>TM</div>
    <div className='h13'>Powered By ReconVolt</div>
    
    <div className='h14'><b>+08</b></div>
    <div className='h15'><b>+500</b></div>
    <div className='h16'><b>+120</b></div>
    <div className='h17'>years of experience </div>
    <div className='h18'>completed projects </div>
    <div className='h19'>client satatisfied </div>
   
<div className="h20">
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
       .changeDelay(30)
      .typeString("We are a Company that focuses on solving your<br/>")
       .typeString("Digital Security Problems by offering you our services<br/>")
       .typeString("that will exceed your  expectations so far.")
       .start();
       }}
       />
    </div>
    <div className='fab fa-discord h21'></div>
    <div className='h22'>Discord </div>
    <div className="fab fa-twitter h23"></div>
    <div className='h24'>Twitter</div>
    <div className="fab fa-linkedin h25"></div>
    <div className='h26'>linkedin</div>
    <div className="fab fa-instagram h27"></div>
    <div className='h28'>Instagram</div>
    <div className='s10'>Our Services</div>
    <div className='s11'>we always provide the unforgetable services</div>
    <div class="flex-container">
  <div>   
  security consultancy
  </div>
  <div className='active'>
 <div> Penetrating Testing</div>
  </div>
  <div>  Auditing  </div>  
</div>
    </div>
    
      
    </>
    
  )
}

export default Landingpage

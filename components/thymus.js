import React, { useEffect } from "react"
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });
export default function Home() {
    const [scroll,setScroll]=React.useState(0)
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScroll(position);
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    
     
    }, []);
    console.log(scroll)
      
  
  return (
  
    
 


<div  className="kolyeContainer items-center relative full2 mt60 mb30">


<div  className="yazı ">


<h2 className="üst text-5xl md:text-4xl lg:text-6xl">Manyetik <br></br> Siyah Kum </h2>

<Fade bottom  duration={1000} delay={1000} >
<h6 className="alt text-4xl md:text-1xl lg:text-4xl"> ile <br></br>Timus Bezini<br></br>Aktive et.</h6>
</Fade>




</div>






<div  className="yazı2 ">

<h2 className="üst text-5xl md:text-4xl lg:text-6xl">Timus</h2>

<h6 className="alt text-4xl md:text-3xl lg:text-4xl">Bezi.</h6>



</div>









<img className="kolye" style={{width:scroll-2900,maxWidth:"96%"}} alt="magnetic pendant" src="/t.jpg">




</img>







     

    
    </div>
  )
}

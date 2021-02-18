import React from "react";
import { useRouter } from 'next/router'
import Link from "next/link";
import config from "react-reveal/globals";
import { Fade } from "react-reveal";
config({ ssrFadeout: true });

const Line = ({ children, href }) => {
    const router = useRouter()

    const handleClick = (e,href) => {
        e.preventDefault()
        router.push(href)
      }
  return (
  
      <div className=" flex flex-row items-center justify-center fullw mt30">
        <Fade bottom>
            <div onClick={(e)=>handleClick(e,"/contact")}  className="card flex-column center justify-center">
          <img src="/lala.png" alt="magnetic sand" className="logow "></img>
          <h2 className="ml20">İletişim</h2>

          </div>
        </Fade>
        <Fade bottom>
        <div onClick={(e)=>handleClick(e,"https://www.ox.ac.uk/news/2016-08-22-study-suggests-routes-improved-immunity-older-people")} className="card card flex-column-reverse center justify-center">
        <div>
        <h2>Oxford </h2>
        <p className="text-center">Timus bezinin faydalarıyla alakalı araştırmalar</p>
        </div>
          <img src="/oxford.png" alt="magnetic sand" className="logow "></img>
          
          </div>
        </Fade>
      </div>)

};

export default Line;

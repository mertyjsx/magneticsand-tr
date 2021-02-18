import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Kumtası from "../components/kumtası";
import Icon from "../components/iconLayout";
import FeatureText from "../components/FeatureText";
import Scale from "../components/ScaleText";
import { Fade } from "react-reveal";
let fadeNumber = 0;
let radius = false;
export default function Home() {
  const [scroll, setScroll] = React.useState(0);
  const [width, setWidth] = React.useState(1400);
  const [height, setHeight] = React.useState(800);
  const [responsive, setResponsive] = React.useState(0);
  const [content, setContent] = React.useState([
    { left: "Stres", content: "Terapi" },
    { left: "Bağışıklık", content: "Rahatlama" },
    { left: "Biyoenerji", content: "" },
  ]);
  const [props_scroll, setPropsScroll] = React.useState(0);

  const [renderText, setrenderText] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setPropsScroll(position);
    console.log(position < window.innerWidth)
    if (position > 50 && position < window.innerWidth ) setScroll(position);
  
if(width<600){
  
  if (position > 50 && position < window.innerWidth*4 - 10) setResponsive(position);
}

  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    return window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);



  if (scroll > (width * 3) / 5) {
   if(width<1000){
    if (scroll > width) {
      radius=true
    }

   }else{

    radius = true;
   }
  } else {
    radius = false;
  }
 if(width<700){
  if (responsive < 400) {
    fadeNumber = 0;
  }

  if (responsive > 400 && responsive < 600) {
    fadeNumber = 1;
  }
  if (responsive > 600 && responsive < 850) {
    fadeNumber = 2;
  }
 

 }else{
  if (scroll < 1060) {
    fadeNumber = 0;
  }

  if (scroll > 1060 && scroll < 1200) {
    fadeNumber = 1;
  }
  if (scroll > 1200 && scroll < 1350) {
    fadeNumber = 2;
  }
 

 }

console.log(fadeNumber)
console.log(width,responsive)

  return (
    <div className={styles.container}>
      <div className="fullw  mt-20">
        <div className="flex  xl:flex-column center  flex-col  fullw">
          <div className="relative sss fullw center column ">
            <h1 className="tt text-start " key="Magnetic sand">
              <span className="den">Ünye</span> Manyetik Kumu
            </h1>
            <h3
              className="text-start text-3rem md:text-xl lg:text-2xl text-white  font-normal mt-4"
              style={{ color: "#bdbdbd" }}
            >
              Sanatsal takılar 
            </h3>
          </div>
          <div className="stickyContainer">
            <div className="relative fullw lg:pt-4  center stickLine  ">
              <div
                className="magneticBackground"
                style={{
                  height: !radius ? scroll : width+100,
                  width: scroll,
                  maxWidth:width,
                  borderRadius: radius ? "0%" : "100%",
                }}
              >
                {" "}
              </div>
              <div className="textContainer">
                <div className="stickyBackground">
                  <div className="leftText ">
                  {fadeNumber == 0 && (
                      <Fade  duration={2000}>
                        <h2 className="text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["left"]}
                        </h2>
                      </Fade>
                    )}
                    {fadeNumber == 1 && (
                      <Fade  opposite duration={2000}>
                        <h2 className="center text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["left"]}
                        </h2>
                      </Fade>
                    )}
                     {fadeNumber == 2 && (
                      <Fade  opposite duration={2000}>
                        <h2 className="center text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["left"]}
                        </h2>
                      </Fade>
                    )}
                  
                  </div>
                  <div className="rightText">
                  {fadeNumber == 0 && (
                      <Fade  duration={2000}>
                        <h2 className="text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["content"]}
                        </h2>
                      </Fade>
                    )}
                    {fadeNumber == 1 && (
                      <Fade  opposite duration={2000}>
                        <h2 className="center text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["content"]}
                        </h2>
                      </Fade>
                    )}
                     {fadeNumber == 2 && (
                      <Fade  opposite duration={2000}>
                        <h2 className="center text-center wh text-6xl font-bold ">
                          {content[fadeNumber]["content"]}
                        </h2>
                      </Fade>
                    )}
                   
                  </div>
                </div>

                <div className="iconContainer">
                  <Icon
                    icon={"/heart.png"}
                    style={{ top: 30, left: 20 }}
                  ></Icon>
                  <Icon
                    icon={"/magnet.png"}
                    style={{ bottom: 30, right: 20 }}
                  ></Icon>
                  <Icon
                    icon={"/heart.png"}
                    style={{ position: "absolute", bottom: 30, left: 20 }}
                  ></Icon>
                  <Icon
                    icon={"/magnet.png"}
                    style={{ top: 30, right: 20 }}
                  ></Icon>

                  <div className="magneticDotCircle">
                    <div className="magneticCircle">
                      <video autoPlay loop muted className="circleR">
                        <source src="/magneticVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag
                      </video>
                    </div>
                  </div>
                </div>
               
              </div>
              <h1 className="blacks">Özellikleri</h1>
            
            </div>
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

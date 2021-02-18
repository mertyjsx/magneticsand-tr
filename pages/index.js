import React, { useEffect, useState } from "react";
import Levelline from "../components/levelLine";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Kumtası from "../components/kumtası";
import { RotateLoader } from "react-spinners";
import Manyetik from "../components/manyetik";
import Thymus from "../components/thymus";
import Level2 from "../components/level2";
import Level3 from "../components/level3";
import Buttons from "../components/buttons";
import Feature from "./features"
import Scale from "../components/ScaleText"
import ButtonContainer from "../components/buttonContainer"
import SampleProduct from "../components/SampleProduct"

import config from "react-reveal/globals";

config({ ssrFadeout: true });
import { Fade } from "react-reveal";
import Ara from "../components/aralevel";

import Email from "../components/email";
export default function Home() {
  const [loading, setloading] = useState(true);
  const size = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  });

  return (
    <div className={""}>
      <main className={styles.main}>
       
       
     
        <Manyetik></Manyetik>
      
       
        <Fade duration={2000}>
        
          <h2 className="text-center wh text-6xl font-bold mb-32 shadow-lg">
    
          </h2>
     
        </Fade>
        <h3 className="text-center text-6xl font-bold mt-10 ">Kolye haline getirdik</h3>
        <h4
          className="text-center text-3xl font-normal  mt-8 shadow-lg p-8"
          style={{ color: "#333232", width: "70%" }}
        >
       Ünye sahillerinde bulunan, içinde 20’ye yakın mineral olduğu tespit edilen, vücudun stresten arınmasına yardımcı olan manyetik siyah kumdan; özel işlemlere tabi tutularak, el işçiliği ile üretilmiştir.
          <br></br>
          <span class="text-3xl font-bold text-black">
           Siyah Manyetik kumu tasarımla buluşturduk
          </span>
        </h4>
        
      <SampleProduct></SampleProduct>
      <ButtonContainer></ButtonContainer>
<Thymus></Thymus>
     

        <Level2></Level2>
        <Level3></Level3>
        
      </main>
    

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="text-center text-gray-500 text-1xl">
            &copy;2021 Magnetic Sand All rights reserved.
          </p>
        </a>
        <a
          href="https://www.instagram.com/unye_manyetik_kumtasi/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          instagram
        </a>
        <a
          href="https://www.etsy.com/shop/MagneticPendant"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          etsy
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          twitter
        </a>
        <a
          href="https://www.pinterest.com/targaryengg15"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          pinterest
        </a>

        <a
          href="https://magneticsand.net"
          target="_blank"
          rel="noopener noreferrer"
          className="social text-sm "
        >
           website
        </a>
      
      </footer>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

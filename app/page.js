"use client";
import Image from "next/image";
import Head from "next/head";

import profileimage from "../public/p2.png";
import grapic from '../public/profile.png';
import code from '../public/code.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
//hooks

import { useState } from "react";






import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter,FaLinkedin } from "react-icons/fa";



export default function Home() {
  const [darkmode, setdarkmode]=useState(false)
  return (
    <div className={darkmode ? "dark:":""}>
      <head>
        <title>
          portfolio
        </title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap');
        </style>
      </head>
      <main className="font-poppins bg-yellow-50 min-h-screen px-5 md:px-10 lg:px-20 dark:bg-black ">
      <section>
        <nav className="py-10 flex justify-between">
          <h1 className=" text-sm md:text-xl">Develop by pixel forge</h1>
          <ul className="flex items-center">
            <li><BsFillMoonStarsFill onClick={()=>setdarkmode(!darkmode)} className=" cursor-pointer text-xl mx-10"/></li>
            <li><a href="" className="bg-yellow-400 text-black px-4 py-2 rounded-lg">Resume</a></li>

          </ul>
        </nav>
        <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4 ">pixel forge</h1>
        <h3 className="text-2xl py-4 " >mobile app and website developer</h3>
        <p className="text-sm py-3 text-gray-400 leading-6 ">
           I’m a passionate and results-driven mobile app and web developer with a deep understanding of both front-end and back-end technologies. With 2 years of experience, I specialize in creating seamless, responsive, and user-friendly digital solutions that help businesses achieve their goals.

        </p>
        </div >
        <div className="flex justify-center gap-16 text-2xl ">
          <a href=""><FaGithub/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><FaLinkedin/></a>
        </div>
    
        <div className="m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80  p-5 mt-20 rounded-full"> 
        <Image src={profileimage} alt="profile image" layout="fill"/>
        </div>
      </section> 
      {/*our-servises*/}  
      <section>
        <div>
          <h2 className="text-3xl py-2 font-bold ">our servises</h2>
          <p className="text-sm py-2 text-gray-400 leading-6">
           I’m a passionate and results-driven mobile app and web developer with a deep understanding of both front-end and back-end technologies. With 2 years of experience, I specialize in creating seamless, responsive, and user-friendly digital solutions that help businesses achieve their goals.

        </p> 
        </div>
        {/*servises-card*/}
        <div  className="md:flex gap-10 mx-auto">
          <div className="bg-yellow-400 text-center shadow-sm p-5 my-10 rounded-xl" >
          <Image 
                src={grapic} 
                alt="Graphic Design" 
                width={150} 
                height={150} 
                className="inline"
              />
            <h2 className="font-bold text-2xl ">grapic designing</h2>
            <p className="text-sm py -2 text-gray-800">As a passionate graphic designer, I specialize in creating visually captivating designs that communicate your message clearly and effectively.</p>
          </div>
      
        <div className="bg-yellow-400 text-center shadow-sm p-5 my-10 rounded-xl">
        
          <Image 
                src={code} 
                alt="Graphic Design" 
                width={150} 
                height={150} 
                className="inline"
              />
            <h2 className="font-bold text-2xl ">web development</h2>
            <p className="text-sm py -2 text-gray-800">As a passionate graphic designer, I specialize in creating visually captivating designs that communicate your message clearly and effectively.</p>
        </div> 
        <div className="bg-yellow-400 text-center shadow-sm p-5 my-10 rounded-xl">
          
          <Image 
                src={grapic} 
                alt="Graphic Design" 
                width={150} 
                height={150} 
                className="inline"
              />
            <h2 className="font-bold text-2xl ">grapic designing</h2>
            <p className="text-sm py -2 text-gray-800">As a passionate graphic designer, I specialize in creating visually captivating designs that communicate your message clearly and effectively.</p>
        </div>
        </div>  
      </section>
      {/*myproject*/}
      <section>
        <div>
          <h2 className="text-3xl font-bold py-2">portfolio</h2>
          <p className="text-sm py-2 text-gray-400 leading-6">I’m a passionate and results-driven mobile app and web developer with a deep understanding of both front-end and back-end technologies. With 2 years of experience, I specialize in creating seamless, responsive, and user-friendly digital solutions that help businesses achieve their goals.
          </p>
        </div>
        <div className="flex flex-col gap-10 p-10 lg:flex-row  lg:flex-wrap">
        <div  className="basis-1/3 flex-1">
        <Image 
                src={web2} 
                alt="web2" layout="responsive"
                className="rounded-lg object-cover"
  
              />
        </div>
        <div className="basis-1/3 flex-1">
        <Image 
                src={web3} 
                alt="web2" layout="responsive"
                className="rounded-lg object-cover"
  
              />
        </div>
        <div className="basis-1/3 flex-1">
        <Image 
                src={web4} 
                alt="web2" layout="responsive"
                className="rounded-lg object-cover"
  
              />
        </div>
        <div className="basis-1/3 flex-1">
        <Image 
                src={web5} 
                alt="web2" layout="responsive"
                className="rounded-lg object-cover"
  
              />
        </div> 
        </div>
      </section>
      {/*footer*/}
      <footer className="border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center">
      <div>
        <h3 className="text-base mb-2">Mobile app and website developer</h3>
        <p className="opacity-40">
           I’m a passionate and results-driven mobile app and web developer with a deep understanding of both front-end and back-end technologies. With 2 years of experience, I specialize in creating seamless, responsive, and user-friendly digital solutions that help businesses achieve their goals.

        </p>
        </div>
        <div className="flex justify-center gap-16 text-2xl ">
          <a href=""><FaGithub/></a>
          <a href=""><FaTwitter/></a>
          <a href=""><FaLinkedin/></a>
        </div>
       
      </footer>
      </main>
      
    </div>
  );
}

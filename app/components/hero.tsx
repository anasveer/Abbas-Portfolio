"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Code, PenTool, Smartphone } from "lucide-react";
import { div } from "framer-motion/client";

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen mx-auto   text-white bg-[url('/home/back.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden">

    <section className="relative w-full text-white flex flex-col md:grid md:grid-cols-2 items-center bg-cover bg-center bg-no-repeat overflow-hidden max-w-[1600px] mx-auto h-full">
    
      {/* Overlay */}
      <div className="absolute inset-0 z-0"></div>
      

      {/* Left Content */}
      <div className="relative z-10 w-full px-6 md:px-16 py-16 md:py-24 space-y-6 text-center md:text-left mt-20">
        <div className="inline-flex items-center bg-[#1f1f1f]/80 text-blue-400 text-sm px-3 py-1 rounded-full border border-gray-700">
          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
          Available for Business
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Building Systems That  <br />
          <span className="text-blue-400">Build Businesses</span>
        </h1>

        <p className="text-gray-300 max-w-md mx-auto md:mx-0">
          I’m the CEO of Multi Techno, where technology meets simplicity and ideas turn into business growth.
My mission is simple to help companies work smarter, not harder. 
        </p>

        <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:bg-blue-700 text-black  px-5 hover:scale-105 transition-5 py-3 rounded-full transition">
          Explore Services
        </button>
 
        {/* Scrolling Logos */}
{/*        
<div className="overflow-hidden mt-10 relative">
  <div className="flex space-x-20 animate-marquee">
    {/* First set of logos */}
    {/* <Image src="/home/log-1.png" alt="logo1" width={170} height={70} />
    <Image src="/home/log-2.png" alt="logo2" width={120} height={10} />
    {/* Repeat logos for infinite scroll */}
    {/* <Image src="/home/log-1.png" alt="logo1" width={170} height={70} />
    <Image src="/home/log-2.png" alt="logo2" width={120} height={10} />
  </div>
</div> */}  

      </div>

  <div className="relative flex justify-center items-center z-10 w-full mt-8 md:mt-0 px-6">
  <div className="relative w-full flex justify-center">
    {/* Main Image */}
    <Image
      src="/home/b-abas.png" // use the uploaded filename
      alt="Profile"
      width={350}
      height={350}
      className="rounded-2xl w-[80%] sm:w-[60%] md:w-[350px] max-w-[350px] h-auto mx-auto"
    />

    {/* Top-Left Floating Icon */}
    <motion.div
      className="absolute top-[15%] md:left-[20%] left-[10%] lg:left-[30%] bg-[#212121]/80 p-3 rounded-full shadow-[0_0_15px_#3b82f6]"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Smartphone  className="text-gray-50 w-4 h-4" /> {/* replace with actual icon */}
    </motion.div>

    {/* Bottom-Left Floating Icon */}
    <motion.div
      className="absolute bottom-[18%] md:left-[3%] left-[2%] lg:left-[20%] bg-[#212121]/80 p-3  rounded-full shadow-[0_0_15px_#3b82f6]"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Code className="text-gray-50 w-4 h-4" />
    </motion.div>

    {/* Top-Right Floating Icon */}
    <motion.div
      className="absolute top-[16%] md:right-[20%] right-[10%] lg:right-[30%] bg-[#212121]/80 p-3 rounded-full shadow-[0_0_15px_#3b82f6]"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Globe className="text-gray-50 w-4 h-4" />
    </motion.div>

    {/* Bottom-Right Floating Icon */}
    <motion.div
      className="absolute bottom-[17%] md:right-[3%] right-[2%] lg:right-[20%] bg-[#212121]/80 p-3 rounded-full shadow-[0_0_15px_#3b82f6]"
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut' }}
    >
      <PenTool className="text-gray-50 w-4 h-4" />
    </motion.div>
  </div>
</div>


    
    </section>
    </div>
  );
}

import React from 'react';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion"; 

const YoursTruly = () => {
  return (
    <section id="yourstruly" className="pt-32 pb-16 min-h-screen">
        {/* HEADING */}
        <motion.div
            className="md:w-1/3 text-center md:text-left md:mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount:0.5}}
            transition={{duration:0.5}}
            variants={{
                hidden: { opacity:0, x: -50 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <div>
                <p className="font-playfair font-semibold text-4xl ">
                    <span className="text-red">Y</span>OURS <span className='text-red'>T</span>RULY
                </p>
            </div>
            <LineGradient width="w-2/5" />
            <p className="mt-6">
                This is what I'm behind the website.
            </p>
        </motion.div>

        {/* YOUTUBE VIDEO */}
        <div className="md:flex gap-8 justify-center">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                transition={{duration:0.5}}
                variants={{
                    hidden: { opacity:0, scale:0.8 },
                    visible: { opacity: 1, scale:1 }
                }}
            >
                <div className='flex flex-col justify-center items-center'>
                    <iframe className="rounded-lg" width="616" height="346" src="https://www.youtube.com/embed/S8F1tD6_eCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="true" ></iframe>
                    <p className='font-playfair font-semibold text-center m-5'>Click the button below to go to the Channel!</p>
                    <button type="button" className='bg-yellow p-4 text-slate-800 font-bold rounded-lg hover:bg-[#ff0000] hover:text-white transition duration-300'><a href="https://www.youtube.com/channel/UCxk4kccqpDaIa1E2rNcxSEA" target="_blank" >romaanchak Rishabh</a></button>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default YoursTruly;
"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projets = [
  {
    num: "01",
    nom: "Portfolio",
    description: "Mon premier projet avec Next.js",
    stack: [{nom: "Next.Js"}, {nom: "Tailwind.Css"}],
    image: "/assets/projets/asset-p1.jpg",
    live: "",
    github: "https://github.com/ChoeurClement/clem-portfolio"
  },
  {
    num: "02",
    nom: "Test",
    description: "Projet test",
    stack: [{nom: "React.js"}, {nom: "Tailwind.Css"}],
    image: "/assets/projets/asset-p1.jpg",
    live: "",
    github: "https://github.com/ChoeurClement/clem-portfolio"
  }
]

const Realisations = () => {
  const [projet, setProjet] = useState(projets[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProjet(projets[currentIndex])
  }

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projet.num}
              </div>
              {/* description du projet */}
              <p className="text-white/60">
                {projet.description}
              </p>
              {/* description du projet */}
              <ul className="flex gap-4">
                {projet.stack.map((item, index) => {
                  return(
                    <li key={index} className="text-xl text-accent">
                      {item.nom}
                      {index !== projet.stack.length - 1 && ","}
                    </li>
                  )
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* boutons */}
              <div className="flex items-center gap-4">
                {/* bouton -> projet en ligne */}
                <Link href={projet.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Projet en ligne</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* bouton -> github du projet */}
                <Link href={projet.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Répertoire Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projets.map((projet, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={projet.image} fill className="object-cover" alt=""/>
                      </div>
                     </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
  
  export default Realisations
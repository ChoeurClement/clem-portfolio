"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

// À propos data
const about = {
  titre: "À propos de moi",
  description: "",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Clément Choeur"
    },
    {
      fieldName: "Email",
      fieldValue: "pro.clement59@gmail.com"
    },
    {
      fieldName: "Nationalité",
      fieldValue: "Français"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible"
    },
    {
      fieldName: "Langues",
      fieldValue: "Français, Anglais"
    }
  ]
}

// Expérience data
const experience = {
  icon: "/assets/resume/badge.svg",
  titre: "Mon expérience",
  description: "",
  items: [
    {
      entreprise: "SNCF",
      position: "Stage développeur Power Platform",
      date: "Mars 2024 - Juin 2024"
    },
    {
      entreprise: "SIGH",
      position: "Stage développeur WinDev",
      date: "Mars 2022 - Juin 2022"
    },
  ]
}

// Scolarité data
const scolarite = {
  icon: "/assets/resume/cap.svg",
  titre: "Ma Scolarité",
  description: "",
  items: [
    {
      ecole: "Université Polytechnique Hauts-de-France",
      diplome: "Licence professionnelle - Développement d'applications Web et Mobile",
      date: "2022 - 2024"
    },
    {
      ecole: "Université Polytechnique Hauts-de-France",
      diplome: "DEUST - Informatique d’organisation et systèmes d’information",
      date: "2020 - 2022"
    },
    {
      ecole: "Lycée Henri Wallon Valenciennes",
      diplome: "Baccalauréat scientifique",
      date: "2017-2020"
    },
  ]
}

// compétence data
const competence = {
  titre: "Mes compétences",
  description: "",
  competenceListe: [
    {
      icon: <FaHtml5/>,
      nom: "html 5"
    },
    {
      icon: <FaCss3/>,
      nom: "css 3"
    },
    {
      icon: <FaJs/>,
      nom: "javascript"
    },
    {
      icon: <FaReact/>,
      nom: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      nom: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      nom: "tailwind.css"
    },
    {
      icon: <FaFigma/>,
      nom: "figma"
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {TooltipTrigger, TooltipContent, TooltipProvider, Tooltip} from '@/components/ui/tooltip'

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const aPropos = () => {
    return (
      <motion.div
        initial={{opacity: 0}}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Expérience</TabsTrigger>
              <TabsTrigger value="scolarite">Scolarité</TabsTrigger>
              <TabsTrigger value="competence">Compétence</TabsTrigger>
              <TabsTrigger value="about">À propos</TabsTrigger>
            </TabsList>

            {/* contenu */}
            <div className="min-h-[70vh] w-full">
              {/* Expérience */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.titre}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.date}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* point */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.entreprise}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* Scolarité */}
              <TabsContent value="scolarite" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{scolarite.titre}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{scolarite.description}</p>
                  <ScrollArea className="h-[660px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {scolarite.items.map((item, index) => {
                        return(
                          <li key={index} className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.date}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.diplome}</h3>
                            <div className="flex items-center gap-3">
                              {/* point */}
                              <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.ecole}</p>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* Compétence */}
              <TabsContent value="competence" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{competence.titre}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{competence.description}</p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {competence.competenceListe.map((competence, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">{competence.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{competence.nom}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              {/* À propos */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{about.titre}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item, index) => {
                      return(
                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </TabsContent>
              
            </div>

          </Tabs>
        </div>
      </motion.div>
    )
  }
  
export default aPropos
"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '01',
    title: 'Développement web',
    description: "Un développement web offrant des solutions sur mesure pour répondre aux besoins de votre entreprise ou personnel, en utilisant les dernières technologies.",
    href: ""
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: "La combinaison esthétique et fonctionnalité pour concevoir des interfaces utilisateur élégantes et faciles à utiliser. En comprenant les besoins et les comportements des utilisateurs, je crée des designs qui améliorent la satisfaction des utilisateurs et augmentent l'engagement.",
    href: ""
  },
  {
    num: '03',
    title: 'SEO',
    description: "Le SEO (Search Engine Optimization) est conçu pour améliorer la visibilité de votre site web sur les moteurs de recherche et attirer un trafic qualifié.",
    href: ""
  },
  {
    num: '04',
    title: 'Design de Logo',
    description: "Un logo vous aide à créer une identité visuelle unique et mémorable pour votre marque. Chaque logo est conçu pour être polyvalent et impactant, assurant qu'il se démarque sur tous les supports, des cartes de visite aux plateformes numériques.",
    href: ""
  },
];

import { easeIn, motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity: 0}}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return(
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* Top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* titre */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";

import { FaEnvelope } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaEnvelope />,
    titre: "Email",
    description: "contact@choeurclement.fr"
  }
]

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nom,
          prenom,
          email,
          telephone,
          message
        })
      });

      const data = await response.json();

      if (data.success) {
        setAlertType("success");
        setAlertMessage("Email envoyé avec succès !");
      } else {
        setAlertType("error");
        setAlertMessage("Échec de l'envoi de l'email.");
      }
    } catch (error) {
      setAlertType("error");
      setAlertMessage("Une erreur est survenue lors de l'envoi de l'email.");
    } finally {
      setAlertVisible(true);

      // Réinitialiser les états
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setMessage("");
    }
  };

  return (
    <motion.section
      initial={{opacity: 0}}
      animate={{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            {alertVisible && (
              <Alert type={alertType} onClose={() => setAlertVisible(false)}>
                {alertMessage}
              </Alert>
            )}
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-4xl text-accent">Me contacter</h3>
              <p className="text-white/60">Pour une simple question ou pour un projet n'hésitez pas à me contacter !</p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="Nom" 
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                />
                <Input 
                  type="text" 
                  placeholder="Prénom" 
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  type="tel" 
                  placeholder="Numéro de téléphone" 
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
              {/* TextArea */}
              <Textarea 
                className="h-[200px]" 
                placeholder="Tape ton message ici ..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {/* Bouton envoyer */}
              <Button 
                size="md" 
                className="max-w-40"
                onClick={handleSubmit}
              >
                Envoyer
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return(
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.titre}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact;

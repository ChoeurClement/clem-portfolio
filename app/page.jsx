import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

const page = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Développeur web</span>
            <h1 className="h1 mb-6">
              Hey, je suis <br /> 
              <span className="text-accent">Clément Choeur</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              diplômé d'une licence en informatique avec une spécialisation en développement web et mobile.
            </p>
            { /* btn and socials */}
            <div>
              <Button>
                <span>Télécharger mon CV</span>
              </Button>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default page
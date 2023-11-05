import React from "react";

import {
  IoBook,
  IoPlanet,
  IoFilterCircleSharp,
  IoCrop,
  IoHeart,
  IoMoon,
} from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";

import { Typography } from "@material-tailwind/react";

const departements = [
  {
    id: 1,
    logo: HiOutlineBookOpen,
    nom: `Département de l'évangélisation`,
    desc: "Le département s’occupe de l’évangélisation à tous les niveaux.",
  },
  {
    id: 2,
    logo: IoPlanet,
    nom: `Département de l'agriculture`,
    desc: "Le département s’occupe de la réalisation des projets agricoles.",
  },
  {
    id: 3,
    logo: IoFilterCircleSharp,
    nom: `Département de pèche`,
    desc: "Le département s’occupe de l’exploitation des cours d’eau et de la formation de la population au respect des normes de pèche.",
  },
  {
    id: 4,
    logo: IoCrop,
    nom: `Département de l’élevage`,
    desc: "Le département s’occupe du gros et du petit bétail, de la valaille, de la pisciculture et l’apiculture.",
  },
  {
    id: 5,
    logo: IoBook,
    nom: `Département de l'éducation`,
    desc: "Le département s’occupe de la réalisation des projets à caractère éducationnel",
  },
  {
    id: 6,
    logo: IoHeart,
    nom: `Département de la santé `,
    desc: "Le département s’occupe de l’organisation harmonieuse et de la réalisation des projets dans le domaine de la santé et de la pharmacie.",
  },
  {
    id: 7,
    logo: IoMoon,
    nom: `Département de l’intendance`,
    desc: "Le département s’occupe de la gestion des patrimoines de l’association.",
  },
];

function OuTravaillonsNous() {
  return (
    <div className="lg:flex lg:items-center lg:justify-center">
      <section className="px-4 md:px-20 py-6 lg:w-[80%]">
        <section className=" text-gray-900">
          <div className="text-center">
            <Typography
              variant="h2"
              className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
            >
              Où travaillons – nous ?
            </Typography>
            <div className="flex items-center justify-center">
              <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
            </div>
            <p className="my-3 md:text-lg">
              Avec votre soutien, nous apportons un changement spirituel, morale, intellectuel
              et physique de l’être tout entier à travers les différents
              départements :
            </p>
          </div>
        </section>
        <section>
          <div className=" overflow-x-auto p-4 ">
            <div className="flex space-x-4">
              {departements.map((departement) => (
                <div
                  key={departement.id}
                  className="min-w-[300px] h-[310px] lg:h-[315px] bg-blue-800 text-gray-50 p-6 rounded-lg shadow-md
                  hover:opacity-50 transition cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <departement.logo className="h-14 w-14" />
                  </div>
                  <h1 className="text-center text-xl font-semibold uppercase">
                    {departement.nom}
                  </h1>
                  <p className=" text-lg mt-2 text-center">
                    {departement.desc}
                  </p>
                  {/* <div className="flex items-center justify-center">
                    <button
                      className="mt-3 md:mt-4 px-8 py-2 md:py-3 rounded-full bg-white
                     text-indigo-600 border border-white hover:bg-transparent hover:text-white transition"
                    >
                      Faire un don
                    </button>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default OuTravaillonsNous;

import React from "react";
import { Typography } from "@material-tailwind/react";

function AppelAuxFonds() {
  return (
    <section className="px-4 md:px-20 flex items-center justify-center bg-blue-800">
      <div className="py-8 text-center text-white md:w-[70%]">
        <Typography
          variant="h1"
          className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
        >
          Appel aux fonds
        </Typography>
        <p className="mt-2 md:text-lg">
          Le financement de l’organisme provienne des cotisations ponctuelles et
          spéciales des initiateurs et membres; des offrandes, dans et legs des
          initiateurs et membres; dons divers en nature ou en espèce des
          organisations gouvernementales, des organismes philanthropiques, des
          sociétés, des églises…; dons divers des partenaires et bienfaiteurs.
        </p>
        <p className="mt-2 md:text-lg font-semibold">
          Contact: (+243)971863287/(+243)906889719
        </p>
        <button
          className="mt-3 md:mt-4 px-8 py-2 md:py-3 rounded-full bg-white
                     text-blue-800 border border-white hover:bg-transparent hover:text-white transition"
        >
          Faire un don
        </button>
      </div>
    </section>
  );
}

export default AppelAuxFonds;

import React from "react";

import { Typography } from "@material-tailwind/react";
import ongImg from "./../assets/images/IMG-20231014-WA0009.jpg";

function About() {
  return (
    <div className="py-2 px-4 md:py-3 md:px-20 lg:py-4">
      <div className="lg:flex lg:items-center lg:justify-center">
        <section className="px-4 md:px-20 py-6 lg:w-[80%]">
          <section className=" text-gray-900">
            <div className="text-center">
              <Typography
                variant="h2"
                className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
              >
                Apropos de Nous
              </Typography>
              <div className="flex items-center justify-center lg:hidden lg:mt-1">
                <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
              </div>
              <p className="mt-3 md:text-lg">
                Le Centre Chrétien de la Promotion Sociale(CCPS) est une
                organisation sans but lucratif exerçant ses activités dans les
                domaines de l’évangélisation de l’agriculture, pèche, élevage,
                éducation, sante et de l’intendance.
              </p>
            </div>
          </section>
        </section>
      </div>

      <section className=" w-full text-gray-900 lg:flex lg:items-center">
        <div className="lg:w-[50%]">
          <img
            src={ongImg}
            alt="ong image"
            className=" rounded-md object-cover"
          />
        </div>
        <div className="lg:w-[50%]">
          <div className="md:block lg:ml-9 mt-4 lg:mt-0">
            <Typography
              variant="h2"
              className=" text-2xl md:text-3xl -mt-1 md:mb-1.5 text-center lg:text-start"
            >
              Notre histoire.
            </Typography>
            <div className="flex items-center justify-center lg:justify-start">
              <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
            </div>
            <div className=" text-center lg:text-justify">
              <p className="mt-3 md:text-lg">
                De nos jours, un constat amère révèle que plusieurs personnes
                vivent encore sous l’empire du diable et la misère dans la
                mesure ou l’évangile passe outre et que les gens ne prennent pas
                l’initiative d’aller vers elles, en témoignant christ, le
                rédempteur, mort, enseveli et ressuscite le 3éme jour selon les
                écritures, la seule et unique solution de Dieu au pèche auquel
                l’humanité entière est confrontée (Romain 3:23, Romain 5:8, 1
                Corinthiens 15: 3-6). Pourtant ces âmes bien entendues, ont soif
                de l’évangile et de la connaissance parfaite de Jésus-Christ, le
                chemin qui mène l’homme au salut (Jean 10 :10). Dans le souci de
                répondre à l’ordre suprême du seigneur consigner en (Mathieu 28
                : 19-20). Une organisation dénommée «Centre Chrétien de la
                Promotion Sociale en sigle CCEPS », a vu le jour, le 02/05/2000
                à Lubumbashi après plusieurs années d’expériences dans le
                service du seigneur.
              </p>
              {/* sous titre */}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:flex lg:items-center lg:justify-center">
          <section className="px-4 md:px-20 py-6 lg:w-[80%]">
            <section className=" text-gray-900">
              <div className="text-center">
                <Typography
                  variant="h2"
                  className=" text-2xl md:text-3xl -mt-1 md:mb-1.5 text-center"
                >
                  Pour quoi nous le faisons ?
                </Typography>
                <div className="flex items-center justify-center">
                  <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
                </div>
                <p className="mt-3 md:text-lg">
                  Le Centre Chrétien de la Promotion Sociale(CCPS) est une
                  organisation sans but lucratif exerçant ses activités dans les
                  domaines de l’évangélisation de l’agriculture, pèche, élevage,
                  éducation, sante et de l’intendance.
                </p>
              </div>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
}

export default About;

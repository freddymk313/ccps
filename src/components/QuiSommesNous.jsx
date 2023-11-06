import React from "react";
import ongCcps from "./../assets/images/IMG-20231014-WA0007.jpg";

import { Typography } from "@material-tailwind/react";

function QuiSommesNous() {
  return (
    <div className=" text-gray-900 py-2 px-4 md:py-3 md:px-20 lg:py-4">
      <div className="md:flex py-3 md:py-6">
        {/* Quis sommes nous pour mobile */}
        <div className="md:hidden mb-4">
          <div className=" text-center">
            <Typography
              variant="h1"
              className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
            >
              Qui sommes-nous ?
            </Typography>
            <div className="flex items-center justify-center">
              <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
            </div>
          </div>
          <div className="text-center">
            <p className="mt-3">
              <span className=" font-semibold">
                Le Centre Chrétien de la Promotion Sociale
              </span>{" "}
              est une organisation sans but lucratif, interconfessionnelle et
              apolitique exerçant ses activités dans les domaines de
              <span className=" font-semibold hover:underline cursor-pointer">
                {" "}
                l’évangélisation, de l’agriculture, pèche, élevage, éducation,
                santé et de l’intendance.
              </span>
              <br />
              <span>
                Elle a pour devise,{" "}
                <span className="font-semibold">
                  servir le genre humain et pourvoir aux besoins des peuples
                </span>
              </span>
              <br />
              <span>
                Notre appui touche tous les aspects de l'homme crée à l'image de
                Dieu dans sa totalité : spirituel, intellectuel, moral,
                matériel, physique,...
              </span>
            </p>
            {/* sous titre */}
          </div>
        </div>
        <img
          src={ongCcps}
          alt="ong_ccps"
          className="md:w-[50%] object-cover rounded-md"
        />
        <div className=" hidden md:block md:w-[50%] md:ml-3 lg:ml-12 mt-3 md:mt-0">
          <Typography
            variant="h1"
            className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
          >
            Qui sommes-nous ?
          </Typography>
          <div>
            <div className=" bg-blue-700 h-2 w-12"></div>
          </div>
          <div className=" text-justify">
            <p className="mt-3 text-lg">
              <span className=" font-semibold">
                Le Centre Chrétien de la Promotion Sociale
              </span>{" "}
              est une organisation sans but lucratif, interconfessionnelle et
              apolitique exerçant ses activités dans les domaines de
              <span className=" font-semibold hover:underline cursor-pointer">
                {" "}
                l’évangélisation, de l’agriculture, pèche, élevage, éducation,
                santé et de l’intendance.
              </span>
              <br />
              <span>
                Elle a pour devise,{" "}
                <span className="font-semibold">
                  servir le genre humain et pourvoir aux besoins des peuples
                </span>
              </span>
              <br />
              <span>
                Notre appui touche tous les aspects de l'homme crée à l'image de
                Dieu dans sa totalité : spirituel, intellectuel, moral,
                matériel, physique,...
              </span>
            </p>
            {/* sous titre */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuiSommesNous;

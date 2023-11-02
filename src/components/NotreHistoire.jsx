import React from "react";
import { Typography } from "@material-tailwind/react";

function NotreHistoire() {
  return (
    <div className=" text-gray-900 py-2 px-4 md:py-3 md:px-20 lg:py-4">
      <div className="flex items-center justify-center">
        <div className="md:w-[85%]">
          <div className=" text-center">
            <Typography
              variant="h1"
              className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
            >
              Notre histoire.
            </Typography>
          </div>
          <div className="text-center">
            <p className="mt-3 text-lg">
              De nos jours, un constat amère révèle que plusieurs personnes
              vivent encore sous l’empire du diable et la misère dans la mesure
              ou l’évangile passe outre et que les gens ne prennent pas
              l’initiative d’aller vers elles, en témoignant christ, le
              rédempteur, mort, enseveli et ressuscite le 3éme jour selon les
              écritures, la seule et unique solution de Dieu au pèche auquel
              l’humanité entière est confrontée (Romain 3:23, Romain 5:8, 1
              Corinthiens 15: 3-6).
            </p>
            <p className="mt-2 text-lg">
              Pourtant ces âmes bien entendues, ont soif de l’évangile et de la
              connaissance parfaite de Jésus-Christ, le chemin qui mène l’homme
              au salut (Jean 10 :10).
            </p>
            <p className="mt-2 text-lg">
              Dans le souci de répondre à l’ordre suprême du seigneur consigner
              en (Mathieu 28 : 19-20). Une organisation dénommée «Centre
              Chrétien de la Promotion Sociale en sigle CCEPS », a vu le jour,
              le 02/05/2000 à Lubumbashi après plusieurs années d’expériences
              dans le service du seigneur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotreHistoire;

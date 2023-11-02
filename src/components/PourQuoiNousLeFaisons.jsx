import React from "react";
import { Typography } from "@material-tailwind/react";

function PourQuoiNousLeFaisons() {
  return (
    <div className=" text-gray-900 py-2 px-4 md:py-3 md:px-20 lg:py-4">
      <div>
        <div className="flex items-center justify-center">
          <Typography
            variant="h1"
            className=" text-3xl md:text-4xl -mt-1 md:mb-1.5"
          >
            Pour quoi nous le faisons ?
          </Typography>
        </div>
        <div>
          <p className="mt-3 text-lg">
            -- Pour la promotion de l’évangélisation
          </p>
          <p className="mt-2 text-lg">
            -- Pour la réhabilitation, la revalorisation, la réintégration de
            toute personne en situation difficile en faisant d’elle un être a
            part entier, et participe activement au développement et à
            l’histoire du monde.
          </p>
          <p className="mt-2 text-lg">
            -- Notre identité chrétienne, ccep est une organisation chrétienne
            de l’expansion de l’évangile à travers le monde.
          </p>
          <p className="mt-2 text-lg">
            -- L’équipe de direction est fixée en RD Congo. Elle est composée du
            président, vice-président, secrétaire général, trésorière et les
            conseillers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PourQuoiNousLeFaisons;

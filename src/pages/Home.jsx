import React from "react";

import Hero from "../components/Hero";
import QuiSommesNous from "../components/QuiSommesNous";
import PourQuoiNousLeFaisons from "../components/PourQuoiNousLeFaisons";
import NotreHistoire from "../components/NotreHistoire";
import AppelAuxFonds from "../components/AppelAuxFonds";
import OuTravaillonsNous from "../components/OuTravaillonsNous";

function Home() {
  return (
    <>
      <Hero />
      <QuiSommesNous />
      {/* <NotreHistoire /> */}
      {/* <PourQuoiNousLeFaisons /> */}
      <AppelAuxFonds />
      <OuTravaillonsNous />
    </>
  );
}

export default Home;

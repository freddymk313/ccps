import { Typography } from "@material-tailwind/react";
import ccpsLogo from "./../assets/images/ccpslogo.png";

import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
} from "react-icons/bi";

export default function FooterWithLogo() {
  const NavLien = [
    { id: 1, text: "Acceuil", Lien: "/" },
    { id: 2, text: "Gallery", Lien: "/gallery" },
    { id: 3, text: "Apropos", Lien: "/apropos" },
    { id: 3, text: "Donate", Lien: "#" },
  ];

  return (
    <footer className="w-full text-gray-900">
      <section className="px-4 md:px-20 py-3 md:py-6">
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
          <Typography as="a" href="#" variant="h4">
            <div className="flex items-center">
              <img
                src={ccpsLogo}
                alt="ccps_logo"
                className="h-9 w-9 lg:h-11 lg:w-11"
              />
              <span className="mt-1">CCPS</span>
            </div>
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            {NavLien.map((item) => (
              <li key={item.id}>
                <Typography
                  as="a"
                  href={item.Lien}
                  color="blue-gray"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  {item.text}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        {/* <Typography
          as="a"
          color="blue-gray"
          className="font-normal text-center transition-colors"
        >
          Nous suivres
        </Typography> */}
        <div className="flex items-center justify-center gap-x-1 md:gap-x-3 mt-1 mb-4">
          <Typography
            as="a"
            href="https://www.facebook.com/profile.php?id=61552800551476"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <BiLogoFacebookCircle className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <BiLogoInstagram className="h-5 w-5" />
          </Typography>
          <Typography
            as="a"
            href="#"
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            <BiLogoYoutube className="h-5 w-5" />
          </Typography>
        </div>
      </section>
      <hr className="border-blue-gray-50" />
      <section>
        <div className="px-4 md:px-20 md:flex items-center text-center justify-center md:justify-between py-4 border-t border-gray-400">
          <Typography color="blue-gray" className="text-sm">
            &copy; 2023 CCPS | CENTRE CHRETIEN DE LA PROMOTION SOCILE
          </Typography>
          <Typography color="blue-gray" className="text-sm">
            Designed by Freddymk.dev
          </Typography>
        </div>
      </section>
    </footer>
  );
}

import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Card,
} from "@material-tailwind/react";

import img1 from "./../assets/images/IMG-20231014-WA0005.jpg";
import img2 from "./../assets/images/IMG-20231014-WA0010.jpg";
import img3 from "./../assets/images/IMG-20231014-WA0008.jpg";
import img5 from "./../assets/images/IMG-20231101-WA0035.jpg";
import img6 from "./../assets/images/IMG-20231101-WA0036.jpg";
import img7 from "./../assets/images/IMG-20231101-WA0037.jpg";
import img8 from "./../assets/images/IMG-20231101-WA0039.jpg";
import img9 from "./../assets/images/IMG-20231101-WA0040.jpg";
import img10 from "./../assets/images/IMG-20231101-WA0047.jpg";
import img11 from "./../assets/images/IMG-20231101-WA0048.jpg";

const galleryImages = [
  { id: 1, imgUrl: img1, alt: "image 1" },
  { id: 2, imgUrl: img2, alt: "image 2" },
  { id: 3, imgUrl: img3, alt: "image 3" },
  { id: 5, imgUrl: img5, alt: "image 2" },
  { id: 6, imgUrl: img6, alt: "image 3" },
  { id: 7, imgUrl: img7, alt: "image 3" },
  { id: 8, imgUrl: img8, alt: "image 3" },
  { id: 9, imgUrl: img9, alt: "image 3" },
  { id: 10, imgUrl: img10, alt: "image 3" },
  { id: 11, imgUrl: img11, alt: "image 3" },
];

function Gallery() {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

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
                Notre Gallery
              </Typography>
              <div className="flex items-center justify-center">
                <div className=" bg-blue-700 h-1 w-12 rounded-full"></div>
              </div>
              <p className="mt-3 md:text-lg">
                Avec votre soutien, nous apportons un changement spirituel,
                morale et physique de l’être tout entier à travers les
                différents départements :
              </p>
            </div>
          </section>
        </section>
      </div>

      <section className=" w-full text-gray-900">
        {galleryImages.length > 0 ? (
          <>
            <div className="flex flex-col gap-y-3 lg:gap-y-4 lg:flex-none lg:grid lg:grid-cols-3 lg:gap-x-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="object-contain">
                  <img
                    src={image.imgUrl}
                    alt={image.alt}
                    className=" rounded-md hover:cursor-pointer
                    max-h-[400px] lg:max-h-[290px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="min-h-[30vh] flex items-center justify-center">
              <Typography
                variant="h2"
                className=" text-2xl md:text-3xl -mt-1 md:mb-1.5 text-gray-600"
              >
                Aucune Image dans la gallery
              </Typography>
            </div>
          </>
        )}
      </section>
    </div>
  );
}

export default Gallery;

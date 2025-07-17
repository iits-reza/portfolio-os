import { Element } from "react-scroll";
import { CardItem } from "../CardItem/CardItem";
import CardWithInfo from "../CardWithInfo/CardWithInfo";
import clothes from "/gallery/clothes.jpg";
import community from "/gallery/community.jpg";
import lab from "/gallery/lab.jpg";
import gallery from "/gallery/gallery.jpg";
import travel from "/gallery/travel.jpg";
const GalleryDetails = [
  {
    title: "Community website",
    description: "A website for the community to share events and programs",
    link: "https://community-for-afg.netlify.app/",
    imgSrc: community,
  },
  {
    title: "Synthesis workshop",
    description:
      "Synthesis workshop is a website for chemistry and science lovers!",
    link: "https://synthesis-workshop.com/",
    imgSrc: lab,
  },
  {
    title: "Around the U.S.",
    description:
      "A friendly space were you can share your photos from around the U.S.",
    link: "https://iits-reza.github.io/se_project_aroundtheus/",
    imgSrc: gallery,
  },
  {
    title: "Travellian",
    description: "A website for sharing your favorite places",
    link: "https://main--amazing-sherbet-d588cc.netlify.app/",
    imgSrc: travel,
  },
  {
    title: "What to wear",
    description: "A website that people can share their favorite clothes",
    link: "https://github.com/iits-reza/se_project_react",
    imgSrc: clothes,
  },
];
function Gallery() {
  return (
    <Element name="gallery">
      <div
        id="gallery"
        className="place-items-center place-content-center min-h-[100dvh] scroll-mt-[20px]"
      >
        <div className="w-[80%] grid grid-cols-3 gap-14 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          {GalleryDetails.map((item, i) => (
            <CardWithInfo key={i} {...item} />
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Gallery;

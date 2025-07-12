import { CardItem } from "../CardItem/CardItem";
import CardWithInfo from "../CardWithInfo/CardWithInfo";
import img1 from "/gallery/clothes.jpg";
import img2 from "/gallery/community.jpg";
import img3 from "/gallery/lab.jpg";
import img4 from "/gallery/order.jpg";
import img5 from "/gallery/travel.jpg";
const GalleryDetails = [
  {
    title: "title1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "",
    imgSrc: img1,
  },
  {
    title: "title2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "",
    imgSrc: img2,
  },
  {
    title: "title3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "",
    imgSrc: img3,
  },
  {
    title: "title4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "",
    imgSrc: img4,
  },
  {
    title: "title5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    link: "",
    imgSrc: img5,
  },
];
function Gallery() {
  return (
    <div className="place-items-center place-content-center h-auto">
      <div className="w-[80%] grid grid-cols-3 gap-14 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {GalleryDetails.map((item, i) => (
          <CardWithInfo key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

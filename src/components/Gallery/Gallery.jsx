import { CardItem } from "../CardItem/CardItem";
import img1 from "/gallery/clothes.jpg";
import img2 from "/gallery/community.jpg";
import img3 from "/gallery/lab.jpg";
import img4 from "/gallery/order.jpg";
import img5 from "/gallery/travel.jpg";
const GalleryDetails = [
  {
    name: "nam1",
    github: "https://github.com/iits-reza/",
    variant: "medRoundness",
    size: "w-[300px] h-[350px]",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt posuere, nunc nisl lacinia mi, vel vestibulum nibh erat in justo. Praesent quis velit vitae erat efficitur dictum. Integer id ligula vitae eros ultrices gravida in vel orci. Sed at commodo nunc.",
    imgSource: img1,
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
    rounded: "rounded-[40px]",
  },
  {
    name: "image 2",
    variant: "smallRoundness",
    size: "w-[200px] h-[150px]",
    github: "https://github.com/iits-reza/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt posuere, nunc nisl lacinia mi, vel vestibulum nibh erat in justo. Praesent quis velit vitae erat efficitur dictum. Integer id ligula vitae eros ultrices gravida in vel orci. Sed at commodo nunc.",
    imgSource: img2,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    rounded: "rounded-[30px]",
  },
  {
    name: "name 4",
    variant: "circle",
    size: "w-[150px] h-[250px]",
    github: "https://github.com/iits-reza/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt posuere, nunc nisl lacinia mi, vel vestibulum nibh erat in justo. Praesent quis velit vitae erat efficitur dictum. Integer id ligula vitae eros ultrices gravida in vel orci. Sed at commodo nunc.",
    imgSource: img4,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
    rounded: "rounded-[50px]",
  },
  {
    name: "image 3",
    variant: "bigRoundness",
    size: "w-[200px] h-[250px]",
    github: "https://github.com/iits-reza/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt posuere, nunc nisl lacinia mi, vel vestibulum nibh erat in justo. Praesent quis velit vitae erat efficitur dictum. Integer id ligula vitae eros ultrices gravida in vel orci. Sed at commodo nunc.",
    imgSource: img3,
    colSpan: "col-span-1",
    rowSpan: "row-span-2",
    rounded: "rounded-[25px]",
  },
  {
    name: "name 5",
    variant: "circle",
    size: "w-[300px] h-[300px]",
    github: "https://github.com/iits-reza/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt posuere, nunc nisl lacinia mi, vel vestibulum nibh erat in justo. Praesent quis velit vitae erat efficitur dictum. Integer id ligula vitae eros ultrices gravida in vel orci. Sed at commodo nunc.",
    imgSource: img5,
    colSpan: "col-span-1",
    rowSpan: "row-span-1",
    rounded: "rounded-full",
  },
];
function Gallery() {
  return (
    <div className="place-items-center place-content-center h-screen">
      <div className="w-[60%] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 auto-rows-[150px]">
        {GalleryDetails.map((item, i) => (
          <CardItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;

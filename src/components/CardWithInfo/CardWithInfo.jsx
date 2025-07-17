import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

export default function CardWithInfo({ imgSrc, title, description, link }) {
  return (
    <div className="flex flex-col gap-4 p-[15px] bg-[var(--card-bg)] rounded-[35px] pb-10">
      <img src={imgSrc} className="rounded-[20px]" />
      <h3 className="text-xl font-semibold ">{title}</h3>
      <p className="text-sm ">{description}</p>
      <div className="flex justify-end">
        <Link
          to={link}
          target="_blank"
          className="w-14 h-14 cursor-pointer hover:bg-blue-500 bg-blue-400 text-black grid place-items-center rounded-full"
        >
          <MdArrowOutward size={35} color="#404040" />
        </Link>
      </div>
    </div>
  );
}

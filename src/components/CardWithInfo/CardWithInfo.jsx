import { MdAdd } from "react-icons/md";

export default function CardWithInfo({ imgSrc, title, description }) {
  return (
    <div className="flex flex-col gap-4 p-[15px] bg-blue-300 rounded-[35px] pb-10">
      <img src={imgSrc} className="rounded-[20px]" />
      <h3 className="text-xl font-semibold truncate">{title}</h3>
      <p className="text-sm truncate">{description}</p>
      <div className="flex justify-end">
        <button className="w-14 h-14 cursor-pointer hover:bg-blue-500 bg-blue-400 text-black grid place-items-center rounded-full">
          <MdAdd size={35} color="#404040" />
        </button>
      </div>
    </div>
  );
}

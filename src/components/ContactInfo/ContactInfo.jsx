import { MdOutlinePhone, MdAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { href, Link } from "react-router-dom";

const infos = [
  {
    icon: MdOutlinePhone,
    label: "‪(240) 829-1280‬",
  },
  {
    icon: MdAlternateEmail,
    label: "rezamoh847@gmail.com",
    linkSrc: "mailto:rezamoh847@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "its-reza",
    linkSrc: "https://www.linkedin.com/in/its-reza/",
    target: "_blank",
  },
  {
    icon: FaGithub,
    label: "iits-reza",
    linkSrc: "https://github.com/iits-reza/",
    target: "_blank",
  },
];

function ContactInfo() {
  return (
    <div className="min-h-[100dvh] flex justify-center items-center ">
      <div className="bg-[var(--card-bg)] p-10 rounded-[3rem] w-[90%] max-w-4xl">
        <div className="relative flex flex-col items-center gap-4 mb-10">
          {/* Avatar + Rotating Shape */}
          <div className="w-36 h-36 relative">
            {/* Image with mask */}
            <div
              className="absolute inset-0 w-full h-full animate-spin-slow"
              style={{
                backgroundImage: `url(/avatar2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                WebkitMaskImage: "url(/shapes/seven-sided-cookie.svg)",
                maskImage: "url(/shapes/seven-sided-cookie.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "cover",
              }}
            ></div>
          </div>
          <h1 className="text-4xl font-bold ">Let's Connect</h1>
        </div>

        {/* Contact Items */}
        <div className="flex flex-col gap-6">
          {/* <div className="flex items-center gap-4 p-4 rounded-3xl bg-indigo-300">
            <div
              className="bg-indigo-500 h-12 w-12 grid place-items-center"
              style={{
                WebkitMaskImage: "url(/shapes/seven-sided-cookie.svg)",
                maskImage: "url(/shapes/seven-sided-cookie.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "cover",
              }}
            >
              <MdOutlinePhone size={24} className="text-white" />
            </div>
            <div className="text-white text-lg font-medium">22070978789</div>
          </div> */}
          {infos.map(({ icon: Icon, label, linkSrc, target }, idx) => (
            <Link to={linkSrc} key={idx} target={target}>
              <div className="flex items-center gap-4 p-4 rounded-3xl bg-[var(--card-item-bg)] hover:bg-[var(--card-item-bg-hover)] transition">
                <div
                  className="bg-indigo-500 h-12 w-12 grid place-items-center"
                  style={{
                    WebkitMaskImage: "url(/shapes/seven-sided-cookie.svg)",
                    maskImage: "url(/shapes/seven-sided-cookie.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "cover",
                    maskSize: "cover",
                  }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <div className=" text-lg font-medium">{label}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;

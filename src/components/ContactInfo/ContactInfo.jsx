import { MdOutlinePhone, MdAlternateEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const infos = [
  {
    icon: MdAlternateEmail,
    label: "example@inlook.com",
    link: "",
    type: "email",
  },
  { icon: FaLinkedin, label: "me#linkin", link: "" },
  { icon: FaGithub, label: "github", link: "" },
];

function ContactInfo() {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="bg-indigo-100 p-10 rounded-[3rem] w-[90%] max-w-4xl">
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
          <h1 className="text-4xl font-bold text-indigo-900">Let's Connect</h1>
        </div>

        {/* Contact Items */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 p-4 rounded-3xl bg-indigo-300">
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
          </div>
          {infos.map(({ icon: Icon, label }, idx) => (
            <Link to>
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-3xl bg-indigo-300"
              >
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
                <div className="text-white text-lg font-medium">{label}</div>
              </div>
            </link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ContactInfo;

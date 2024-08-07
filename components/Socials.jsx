import Link from "next/link";

import {
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

export const socialData = [

  {
    name: "Instagram",
    link: "https://www.instagram.com/Bajaj.krushna/",
    Icon: RiInstagramLine,
  },
  
  {
    name: "Github",
    link: "https://github.com/Krushnabajaj",
    Icon: RiGithubLine,
  },

  {
    name: "Linklidn",
    link: "https://www.linkedin.com/in/krushna-bajaj/",
    Icon: RiLinkedinLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Linklidn"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;

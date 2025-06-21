// import Link from "next/link";

// function page() {
//   return (
//     <div className="min-h-screen flex gap-36 py-12 px-4 sm:px-8 justify-center">
//       <div>
//         <h1 className="text-8xl">
//           About me<span className="text-12xl text-red-600">.</span>
//         </h1>
//         <p className="mt-8 text-xl">
//           Developing beautiful and functional websites is what I love doing, and
//           that&rsquo;s why I give my all in every new challenge.
//         </p>
//       </div>
//       <div>
//         <ul>
//           <li>
//             <Link href="https://www.youtube.com/">YT</Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default page;

import Link from "next/link";
import {
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function page() {
  const socialLinks = [
    {
      icon: <FaGithub className="text-3xl" />,
      url: "https://github.com/imzainayaz?tab=repositories",
      name: "GitHub",
      color: "hover:text-gray-700",
    },
    {
      icon: <FaYoutube className="text-3xl" />,
      url: "https://youtube.com/",
      name: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      url: "https://linkedin.com/",
      name: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <FaTwitter className="text-3xl" />,
      url: "https://x.com/toomuchnumbed",
      name: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      url: "https://www.instagram.com/its._.zain._.here/",
      name: "Twitter",
      color: "hover:text-purple-400",
    },
  ];

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-36 py-12 px-4 sm:px-8">
      {/* Left Column - About Text */}
      <div className="text-center md:text-left max-w-2xl">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">
          About me<span className="text-red-600">.</span>
        </h1>
        <p className="mt-6 md:mt-8 text-lg md:text-xl">
          Developing beautiful and functional websites is what I love doing, and
          that&rsquo;s why I give my all in every new challenge.
        </p>
        <p className="mt-6 md:mt-8 text-lg md:text-xl ">
          Mail :{" "}
          <span className="italic text-2xl text-[#d97706]">
            wonderingwanderingzain@gmail.com
          </span>
        </p>
      </div>

      {/* Right Column - Social Icons */}
      <div className="flex md:flex-col justify-center gap-8 md:gap-6">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 transition-colors duration-300 ${link.color}`}
            aria-label={link.name}
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;

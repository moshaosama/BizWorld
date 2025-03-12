import { BiSolidCastle } from "react-icons/bi";
import { FaCode, FaTree, FaWordpressSimple } from "react-icons/fa";
import { HiMiniCheck } from "react-icons/hi2";
import { LuShipWheel } from "react-icons/lu";

export const OurServiceList = [
  {
    Icon: (
      <FaWordpressSimple
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "WordPress Installation",
    Parahgraph: "Installing WordPress and Plugins",
  },
  {
    Icon: (
      <HiMiniCheck
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "Website Optimization",
    Parahgraph: "Optimizing your site Load Speed",
  },
  {
    Icon: (
      <FaTree
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "Website Design",
    Parahgraph: "Photoshop layered web design",
  },
  {
    Icon: (
      <BiSolidCastle
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "Security Solutions",
    Parahgraph: "Increase your server security risk",
  },
  {
    Icon: (
      <FaCode
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "Website Development",
    Parahgraph: "Developing website from wireframe",
  },
  {
    Icon: (
      <LuShipWheel
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
    ),
    Header: "Unlimited Support",
    Parahgraph: "Supporting you with any problems",
  },
];

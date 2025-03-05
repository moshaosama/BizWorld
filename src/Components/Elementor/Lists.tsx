import { ReactElement } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { PiUserSoundLight } from "react-icons/pi";
import { VscCheckAll } from "react-icons/vsc";

export type ElementorsListsType = {
  Icon: ReactElement;
  TitleHeader: string;
  TitleHeader2: string;
  Paragraph: string;
};

export const ElementorsLists: ElementorsListsType[] = [
  {
    Icon: <VscCheckAll />,
    TitleHeader: "SMART",
    TitleHeader2: "SOLUTIONS",
    Paragraph: "Providing Excellent Candidates",
  },
  {
    Icon: <PiUserSoundLight />,
    TitleHeader: "BEST",
    TitleHeader2: "OFFERS",
    Paragraph: "Starting Small Business",
  },
  {
    Icon: <IoMdPersonAdd />,
    TitleHeader: "FRIENDLY",
    TitleHeader2: "SUPPORTS",
    Paragraph: "Experienced Consultants",
  },
];

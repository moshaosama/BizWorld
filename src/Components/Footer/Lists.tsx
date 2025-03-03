import { BiPhone } from "react-icons/bi";
import { BsSkype } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export const ShortcutsList = [
  {
    Name: "Home",
  },
  {
    Name: "City Store",
  },
  {
    Name: "News",
  },
  {
    Name: "Clients",
  },
  {
    Name: "Consultation",
  },
  {
    Name: "Publicity",
  },
  {
    Name: "Support",
  },
  {
    Name: "Maps",
  },
  {
    Name: "Careers",
  },
  {
    Name: "Employees",
  },
  {
    Name: "Teams",
  },
  {
    Name: "Benefits",
  },
  {
    Name: "PrivacyPolicy",
  },
];

export const HeaderFooterList = [
  {
    Title: "office",
    Content: (
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <ImLocation className=" bg-white text-4xl p-2  rounded-full text-blue-500" />
          <p>121 King Street, NewYork</p>
        </div>
        <div className="flex items-center gap-2">
          <BiPhone className=" bg-white text-4xl p-2  rounded-full text-blue-500" />
          <p>+20 1004365707</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className=" bg-white text-4xl p-2  rounded-full text-blue-500" />
          <p>mohamedOSFekry@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <BsSkype className=" bg-white text-4xl p-2  rounded-full text-blue-500" />
          <p>@Mo4aFekry</p>
        </div>
      </div>
    ),
  },
  {
    Title: "News",
    Content: (
      <div className="flex flex-col gap-10 w-60">
        <div className="flex items-center gap-2">
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post1-1-150x150.jpg"
            alt="PlaceNews.png"
            className="w-20 h-20 rounded-xl"
            loading="lazy"
            decoding="async"
          />
          <p className="text-white font-bold">A Place of Slience</p>
        </div>

        <div className="flex items-center gap-2">
          <img
            src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post2-1-150x150.jpg"
            alt="PlaceNews.png"
            className="w-20 h-20 rounded-xl"
            loading="lazy"
            decoding="async"
          />
          <p className="text-white font-bold">
            How to create a Logo like a Pro
          </p>
        </div>
      </div>
    ),
  },
  {
    Title: "Shortcuts",
    Content: (
      <div className="grid grid-cols-2 gap-1.5">
        {ShortcutsList?.map((el: { Name: string }, index: number) => {
          return (
            <div key={index}>
              <h1 className="text-white font-semibold cursor-pointer hover:translate-x-2 transition-all duration-300 hover:text-gray-400">
                {">"}
                {el.Name}
              </h1>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    Title: "Working Hours",
    Content: (
      <div className="flex flex-col gap-8 w-60">
        <h1 className="text-white font-semibold">
          Our support available to help you 24 hours a day, seven days a week.
        </h1>
        <div className=" flex flex-col text-white">
          <p>Monday to Friday ......... 8AM - 4PM</p>
          <p>Monday to Friday ......... 8AM - 4PM</p>
        </div>
      </div>
    ),
  },
];

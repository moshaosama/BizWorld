import { ReactElement, useCallback } from "react";
import { Container } from "../../Style";
import { ImLocation } from "react-icons/im";

type HeaderFooterType = { Title: string; Content: ReactElement };

const Footer = () => {
  const HeaderFooterList = [
    {
      Title: "office",
      Content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
        </div>
      ),
    },
    {
      Title: "News",
      Content: (
        <div className="flex flex-col gap-3 w-60">
          <div className="flex items-center gap-2">
            <img
              src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post1-1-150x150.jpg"
              alt="PlaceNews.png"
              className="w-20 rounded-xl"
              loading="lazy"
            />
            <p className="text-white font-bold">A Place of Slience</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/06/post2-1-150x150.jpg"
              alt="PlaceNews.png"
              className="w-20 rounded-xl"
              loading="lazy"
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
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
        </div>
      ),
    },
    {
      Title: "Working Hours",
      Content: (
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
          <div className="flex items-center gap-2">
            <ImLocation className=" bg-white text-4xl p-2 text-black rounded-full" />
            <p>121 King Street, NewYork</p>
          </div>
        </div>
      ),
    },
  ];

  const HeaderFooterListRender = useCallback(() => {
    return (
      <>
        {HeaderFooterList?.map((el: HeaderFooterType, index: number) => {
          return (
            <div key={index}>
              <h1 className="text-xl font-bold text-white">{el.Title}</h1>
              <hr className="text-white" />
              <div className="mt-8">{el.Content}</div>
            </div>
          );
        })}
      </>
    );
  }, []);
  return (
    <>
      <div className="bg-[#4d61ff] py-2">
        <div className={Container}>
          <HeaderFooterListRender />
        </div>
      </div>
    </>
  );
};

export default Footer;

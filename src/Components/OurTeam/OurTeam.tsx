import { useMemo } from "react";
import { Container } from "../../Style";
import OurTeamCom from "./OurTeamComponent/OurTeamCom";
import { FiguresList } from "./OurTeamList";

type FiguresType = {
  Image: string;
  Title: string;
};

const OurTeam = () => {
  const FiguresRender = useMemo(() => {
    return FiguresList?.map((el: FiguresType, index: number) => {
      return (
        <div
          className="w-1/2 group relative transition-all opacity-30 hover:opacity-100 duration-500 hover:-translate-y-10"
          key={index}
        >
          <img src={el.Image} alt="Rest.png" loading="lazy" decoding="async" />
          <h1 className="absolute bottom-20 left-10 text-3xl text-white z-50">
            {el.Title}
          </h1>
          <button className="absolute hidden group-hover:block cursor-pointer bottom-5 left-10 text-xl bg-white w-40 py-2 rounded-full text-black font-bold z-50">
            Show More
          </button>
        </div>
      );
    });
  }, []);
  return (
    <>
      <h1 className="text-center mt-32 text-white text-4xl font-bold ">
        Our ExpertTeam
      </h1>
      <div className={Container} style={{ marginTop: "7pc" }}>
        <OurTeamCom />
      </div>
      <div className="mt-36 flex">{FiguresRender}</div>
    </>
  );
};

export default OurTeam;

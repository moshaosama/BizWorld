import { useMemo } from "react";
import { OurTeamList } from "../OurTeamList";

export type OurTeamProps = {
  Image: string;
  About: string;
};

const OurTeamCom = () => {
  const OurTeamComRender = useMemo(() => {
    return OurTeamList?.map((el: OurTeamProps, index: number) => {
      return (
        <div key={index}>
          <img
            src={el.Image}
            alt="Person.png"
            loading="lazy"
            className="object-cover w-56 rounded-3xl border-[2px] border-solid border-blue-400 hover:border-[10px] transition-all duration-200"
          />
          <div className="text-center mt-5">
            <h1 className="text-white font-bold text-2xl">Mohamed Osama</h1>
            <p className="text-gray-600">{el.About}</p>
          </div>
        </div>
      );
    });
  }, []);
  return <>{OurTeamComRender}</>;
};

export default OurTeamCom;

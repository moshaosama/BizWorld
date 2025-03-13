import { useMemo } from "react";
import { Container } from "../../Style";
import { ElementorsLists, ElementorsListsType } from "./Lists";

const Elementor = () => {
  const ElementorRender = useMemo(() => {
    return ElementorsLists?.map((el: ElementorsListsType, index: number) => {
      return (
        <div key={index}>
          <div
            className={`flex bg-[#2d3033] gap-5 rounded-xl py-6 px-10  w-fit`}
          >
            <div className="bg-[#4d61ff] text-white text-4xl p-3 rounded-full">
              {el.Icon}
            </div>
            <div className="text-white">
              <h1 className="font-bold text-2xl ">
                {el.TitleHeader}{" "}
                <span className="font-semibold">{el.TitleHeader2}</span>
              </h1>
              <p>{el.Paragraph}</p>
            </div>
          </div>
        </div>
      );
    });
  }, []);
  return (
    <>
      <div className={Container}>{ElementorRender}</div>
    </>
  );
};

export default Elementor;

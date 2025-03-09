import { useMemo } from "react";
import { Container } from "../../../Style";
import style from "./MissionCart.module.css";

const MissionCart = () => {
  const { Image } = style;
  const ImageUrl = [
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h4-1-1.jpg",
      Content: "Very Useful Elements For Perfect Flow",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h1-1.jpg",
      Content: "Live Customizer For Theme Options",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h4-1-1.jpg",
      Content: "Tons of Presets For Pagebuilder",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h1-1.jpg",
      Content: "Friendly Support Up To 6 Months",
    },
  ];

  const ImageRender = useMemo(() => {
    return ImageUrl.map(
      (el: { Src: string; Content: string }, index: number) => {
        return (
          <div
            key={index}
            className={`${Image} object-contain`}
            style={
              {
                "--content": `"${el.Content}"`,
                backgroundImage: `url(${el.Src})`,
              } as React.CSSProperties
            }
          >
            <div className="w-full flex justify-center">
              <button className="bg-[#4d61ff] font-bold absolute bottom-10 z-50 opacity-95 text-white w-40 rounded-full p-2">
                more details
              </button>
            </div>
          </div>
        );
      }
    );
  }, [ImageUrl]);
  return <div className={Container}>{ImageRender}</div>;
};

export default MissionCart;

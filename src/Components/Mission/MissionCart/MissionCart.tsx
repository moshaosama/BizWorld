import { useMemo } from "react";
import { Container } from "../../../Style";
import style from "./MissionCart.module.css";

const MissionCart = () => {
  const { Image } = style;
  const ImageUrl = [
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h4-1-1.jpg",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h1-1.jpg",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h4-1-1.jpg",
    },
    {
      Src: "https://xtratheme.com/elementor/business-2/wp-content/uploads/sites/18/2017/11/h1-1.jpg",
    },
  ];

  const ImageRender = useMemo(() => {
    return ImageUrl.map((el: { Src: string }, index: number) => {
      return (
        <div
          key={index}
          className={`${Image} bg-[url("${el.Src}")]  object-contain`}
        ></div>
      );
    });
  }, [ImageUrl]);
  return <div className={Container}>{ImageRender}</div>;
};

export default MissionCart;

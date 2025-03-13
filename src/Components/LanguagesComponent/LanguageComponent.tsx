import { useMemo } from "react";
import { LanguagesList } from "./LanguagesList";
import { Container } from "../../Style";

type LanguageListType = { Image: string };

const LanguageComponent = () => {
  const LanguageListRender = useMemo(() => {
    return LanguagesList?.map((el: LanguageListType, index: number) => {
      return (
        <img
          src={el.Image}
          alt="Languages.png"
          key={index}
          className="opacity-30 hover:opacity-100 hover:scale-105 transition-all duration-500"
        />
      );
    });
  }, []);
  return (
    <>
      <div
        className={`${Container}`}
        style={{ margin: "5pc 0pc", justifyContent: "center" }}
      >
        {LanguageListRender}
      </div>
    </>
  );
};

export default LanguageComponent;

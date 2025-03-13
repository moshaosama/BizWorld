import { useEffect, useState } from "react";
import { Container } from "../../Style";

const PageCover = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`${Container} h-[46pc]`}>
      <div className="flex items-center">
        <div
          id="Texts"
          className={`text-white flex w-fit flex-col gap-7 transition-all duration-500 ${
            animate ? "translate-x-0 opacity-100" : "translate-x-44 opacity-0"
          }`}
        >
          <p className="text-3xl font-semibold text-[#4d61ff]">
            {"We Are Expert In".toUpperCase()}
          </p>
          <h1 className="text-6xl ">{"Business Solutions".toUpperCase()}</h1>
        </div>
        <div>
          <img
            src="depositphotos_58797721-Young-black-businessman-outdoor-removebg-preview.png"
            alt=""
            className="w-[900pc]"
          />
        </div>
      </div>
    </div>
  );
};

export default PageCover;

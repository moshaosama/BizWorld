import { ReactElement, useCallback } from "react";
import { Container } from "../../Style";

import { HeaderFooterList } from "./Lists";

type HeaderFooterType = { Title: string; Content: ReactElement };

const Footer = () => {
  const HeaderFooterListRender = useCallback(() => {
    return (
      <>
        {HeaderFooterList?.map((el: HeaderFooterType, index: number) => {
          return (
            <div key={index}>
              <h1 className="text-xl font-bold text-white">{el.Title}</h1>
              <hr className="text-white" />
              <div className="mt-4">{el.Content}</div>
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

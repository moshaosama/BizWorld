import { ReactElement, useMemo } from "react";
import { OurServiceList } from "../OurServiceList";
export type ServiceComProps = {
  Icon: ReactElement;
  Header: string;
  Parahgraph: string;
};

const ServiceCom = () => {
  const ServiceComRender = useMemo(() => {
    return OurServiceList?.map((eL: ServiceComProps, index: number) => {
      return (
        <div className="flex gap-5 items-center" key={index}>
          {eL.Icon}
          <div className="text-white ">
            <h1 className="font-bold text-2xl">{eL.Header}</h1>
            <p className="text-gray-400 text-md font-semibold">
              {eL.Parahgraph}
            </p>
          </div>
        </div>
      );
    });
  }, []);
  return <>{ServiceComRender}</>;
};

export default ServiceCom;

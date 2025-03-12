import { lazy, Suspense, useMemo } from "react";
import { Container } from "../../Style";
import { OurServiceList } from "./OurServiceList";
import { ServiceComProps } from "./ServiceComponent/ServiceCom";
const ServiceCom = lazy(() => import("./ServiceComponent/ServiceCom"));

const OurService = () => {
  const ServiceComRender = useMemo(() => {
    return OurServiceList?.map((eL: ServiceComProps, index: number) => {
      return (
        <div key={index}>
          <ServiceCom
            Icon={eL.Icon}
            Header={eL.Header}
            Parahgraph={eL.Parahgraph}
          />
        </div>
      );
    });
  }, []);
  return (
    <div className="bg-[#4d61ff] py-2 mt-52">
      <div
        className={Container}
        style={{ alignItems: "start", flexDirection: "column", gap: "4pc" }}
      >
        <h1 className="text-white text-5xl font-serif">Our Services</h1>
        <div className="grid grid-cols-3 w-full gap-20">
          <Suspense fallback="Loading...">{ServiceComRender}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default OurService;

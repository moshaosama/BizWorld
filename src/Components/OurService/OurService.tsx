import { lazy } from "react";
import { Container } from "../../Style";
const ServiceCom = lazy(() => import("./ServiceComponent/ServiceCom"));

const OurService = () => {
  return (
    <div className="bg-[#4d61ff] py-2 mt-52">
      <div
        className={Container}
        style={{ alignItems: "start", flexDirection: "column", gap: "4pc" }}
      >
        <h1 className="text-white text-5xl font-serif">Our Services</h1>
        <div className="grid grid-cols-3 w-full gap-20">
          <ServiceCom />
        </div>
      </div>
    </div>
  );
};

export default OurService;

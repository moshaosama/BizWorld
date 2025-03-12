import { memo, ReactElement } from "react";
export type ServiceComProps = {
  Icon: ReactElement;
  Header: string;
  Parahgraph: string;
};

const ServiceCom = memo(({ Icon, Header, Parahgraph }: ServiceComProps) => {
  return (
    <div className="flex gap-5 items-center">
      {Icon}
      <div className="text-white ">
        <h1 className="font-bold text-2xl">{Header}</h1>
        <p className="text-gray-400 text-md font-semibold">{Parahgraph}</p>
      </div>
    </div>
  );
});

export default ServiceCom;

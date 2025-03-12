import { FaWordpressSimple } from "react-icons/fa";

const ServiceCom = () => {
  return (
    <div className="flex gap-5 items-center">
      <FaWordpressSimple
        className="text-[#4d61ff] p-2 text-5xl bg-white"
        style={{ borderRadius: "20px 20px 0px 20px" }}
      />
      <div className="text-white ">
        <h1 className="font-bold text-2xl">WordPress Installation</h1>
        <p className="text-gray-400 text-md font-semibold">
          Installing WordPress and Plugins
        </p>
      </div>
    </div>
  );
};

export default ServiceCom;

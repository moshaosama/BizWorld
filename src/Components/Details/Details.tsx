import { Container } from "../../Style";
import DetailsAbout from "./DetailsAbout/DetailsAbout";
import DetailsNumber from "./DetailsNumber/DetailsNumber";

const Details = () => {
  return (
    <div className={`${Container}`} style={{ marginTop: "10pc" }}>
      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <h1 className="text-white font-bold text-3xl">
          We Will Help You{" "}
          <span className="text-2xl font-thin">To Grow Your Business</span>
        </h1>
        <p className="text-gray-500 text-lg">
          We're here to help you to finding a best way
        </p>
        <div>
          <DetailsNumber />
          <DetailsAbout />
        </div>
      </div>
    </div>
  );
};

export default Details;

import { Container } from "../../Style";
import OurTeamCom from "./OurTeamComponent/OurTeamCom";

const OurTeam = () => {
  return (
    <>
      <h1 className="text-center mt-32 text-white text-4xl font-bold ">
        Our ExpertTeam
      </h1>
      <div className={Container} style={{ marginTop: "7pc" }}>
        <OurTeamCom />
      </div>
    </>
  );
};

export default OurTeam;

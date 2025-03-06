import MissionCart from "./MissionCart/MissionCart";

const Mission = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-10 justify-center my-36">
        <h1 className="text-[#4d61ff] font-bold text-4xl">Our Mission</h1>
        <p className="text-white text-2xl w-[50pc] text-center">
          Build the best product, cause no unnecessary harm, use business to
          inspire and implement solutions to the environmental crisis.
        </p>
        <p className="text-gray-500  text-xl">
          To create a better everyday life for the many people
        </p>
      </div>
      <MissionCart />
    </>
  );
};

export default Mission;

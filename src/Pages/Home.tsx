import { Container } from "../Style";

const Home = () => {
  return (
    <>
      <div className={`${Container} h-[46pc]`}>
        <div className="flex items-center ">
          <div className="text-white flex w-fit flex-col gap-7">
            <p className="text-3xl font-semibold text-[#4d61ff]">
              {"We Are Expert In".toUpperCase()}
            </p>
            <h1 className="text-6xl ">{"Business Sloutions".toUpperCase()}</h1>
          </div>
          <div>
            <img
              src="public\depositphotos_58797721-Young-black-businessman-outdoor-removebg-preview.png"
              alt=""
              className="w-[60pc]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

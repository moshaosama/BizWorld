import {
  Details,
  Elementor,
  Mission,
  OurService,
  OurTeam,
  PageCover,
} from "../Components";
import LanguageComponent from "../Components/LanguagesComponent/LanguageComponent";

const Home = () => {
  return (
    <>
      <PageCover />
      <Elementor />
      <Mission />
      <OurService />
      <OurTeam />
      <Details />
      <LanguageComponent />
    </>
  );
};

export default Home;

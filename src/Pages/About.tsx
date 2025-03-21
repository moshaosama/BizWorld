import { AboutContent, Details, OurTeam } from "../Components";
import LanguageComponent from "../Components/LanguagesComponent/LanguageComponent";

const About = () => {
  return (
    <>
      <AboutContent
        flexDirection="row"
        Header="About Company"
        Text="Simply put, our mission is to help people grow their businesses. This is why millions of executives in growing companies rely on XtraTheme.com to acquire the knowledge, products and services they need to run and grow their businesses and careers. It's also where thousands of advertisers reach and engage these valuable buyers, generating well over $1.6 billion in incremental annual revenue."
        ShowCheckBox={false}
      />
      <AboutContent
        flexDirection="row-reverse"
        Header="Why Choose Us ?!"
        Text="Xtra is redefining the marketplace for business purchases by making it dramatically easier for buyers to discover, learn more about, compare and buy the products and services they need to run and grow their businesses."
        ShowCheckBox={true}
      />
      <Details />
      <OurTeam />
      <LanguageComponent />
    </>
  );
};

export default About;

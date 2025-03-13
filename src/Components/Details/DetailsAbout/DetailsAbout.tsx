import style from "./DetailsAbout.module.css";

const DetailsAbout = () => {
  const { Header, Card, Card_Content, Image, DetailsAboutMe } = style;
  return (
    <>
      <div className={Header}>
        <div className={`${Card} opacity-10 shadow-xl shadow-[#4d61ff]`}>
          <div className={Card_Content}>
            <div className="absolute -top-10">
              <img
                src="WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                alt="Profile.png"
                loading="lazy"
                decoding="async"
                className={`${Image} object-cover rounded-full`}
              />
            </div>
            <div className={DetailsAboutMe}>
              <div className="flex items-center gap-4">
                <h1 className="text-[#4d61ff] font-bold text-lg">
                  Mohamed Osama
                </h1>
                <p className="text-gray-500 text-md">Full-Stack Developer</p>
              </div>
              <div>
                <p className="text-center mx-10">
                  Passionate Full Stack Developer with expertise in Angular and
                  Node.js. I have a strong foundation in building scalable web
                  applications and creating user-friendly, responsive
                  interfaces. With hands-on experience in the MEAN/MERN stacks,
                  I enjoy solving problems and delivering high-quality
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Card} shadow-xl shadow-[#4d61ff]`}>
          <div className={Card_Content}>
            <div className="absolute -top-10">
              <img
                src="WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                alt="Profile.png"
                loading="lazy"
                decoding="async"
                className={`${Image} object-cover rounded-full`}
              />
            </div>
            <div className={DetailsAboutMe}>
              <div className="flex items-center gap-4">
                <h1 className="text-[#4d61ff] font-bold text-lg">
                  Mohamed Osama
                </h1>
                <p className="text-gray-500 text-md">Full-Stack Developer</p>
              </div>
              <div>
                <p className="text-center mx-10">
                  Passionate Full Stack Developer with expertise in Angular and
                  Node.js. I have a strong foundation in building scalable web
                  applications and creating user-friendly, responsive
                  interfaces. With hands-on experience in the MEAN/MERN stacks,
                  I enjoy solving problems and delivering high-quality
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${Card} opacity-10 shadow-xl shadow-[#4d61ff]`}>
          <div className={Card_Content}>
            <div className="absolute -top-10">
              <img
                src="WhatsApp Image 2024-10-20 at 21.44.22_3cca6ed1.jpg"
                alt="Profile.png"
                loading="lazy"
                decoding="async"
                className={`${Image} object-cover rounded-full`}
              />
            </div>
            <div className={DetailsAboutMe}>
              <div className="flex items-center gap-4">
                <h1 className="text-[#4d61ff] font-bold text-lg">
                  Mohamed Osama
                </h1>
                <p className="text-gray-500 text-md">Full-Stack Developer</p>
              </div>
              <div>
                <p className="text-center mx-10">
                  Passionate Full Stack Developer with expertise in Angular and
                  Node.js. I have a strong foundation in building scalable web
                  applications and creating user-friendly, responsive
                  interfaces. With hands-on experience in the MEAN/MERN stacks,
                  I enjoy solving problems and delivering high-quality
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsAbout;

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Container } from "../../Style";
import Style from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useMemo } from "react";
import { NavLinks } from "./Lists";

const Navbar = () => {
  const { NavbarLink, Icons, PhoneNumber } = Style;

  window.addEventListener("scroll", () => {
    const Navbar = document.getElementById("Navbar");
    if (Navbar) {
      if (window.scrollY >= 10) {
        Navbar.style.setProperty("background-color", "rgba(0, 0, 0, 0.78)");
      } else {
        Navbar.style.setProperty("background-color", "transparent");
      }
    }
  });

  const NavLinkRender = useMemo(() => {
    return NavLinks?.map((el: { Title: string; To: string }, index: number) => {
      return (
        <div key={index}>
          <NavLink to={el.To}>{el.Title}</NavLink>
        </div>
      );
    });
  }, [NavLinks]);

  return (
    <div id="Navbar" className="sticky top-0 py-1 z-50">
      <div className={`${Container}`}>
        <img
          src="src\assets\logo-2n.png"
          alt="Logo.png"
          loading="lazy"
          className="w-54"
        />

        <div className={NavbarLink}>{NavLinkRender}</div>

        <div className={Icons}>
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaTwitter className="cursor-pointer" />
          <div className={PhoneNumber}>+20 1004365707</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Container } from "../../Style";
import Style from "./Navbar.module.css";
import { NavLink } from "react-router";

const Navbar = () => {
  const { NavbarLink } = Style;
  return (
    <div className={Container}>
      <img
        src="src\assets\logo-2n.png"
        alt="Logo.png"
        loading="lazy"
        className="w-54"
      />

      <div className={NavbarLink}>
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
        <NavLink to={"/services"}>SERVICES</NavLink>
        <NavLink to={"/blogs"}>BLOG</NavLink>
        <NavLink to={"/shop"}>SHOP</NavLink>
        <NavLink to={"/faq"}>FAQ</NavLink>
        <NavLink to={"/contact"}>CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

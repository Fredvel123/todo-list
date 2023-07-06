import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { LogoStyles } from "./LogoStyles";

export default function Logo() {
  return (
    <LogoStyles>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoStyles>
  );
}

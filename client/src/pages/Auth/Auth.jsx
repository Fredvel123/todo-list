import { useState } from "react";
import useTheme from "../../hooks/useTheme";
// images
import image from "../../assets/sign.svg";
import logo from "../../assets/logo.png";
// styles
import { AuthStyles } from "./AuthStyles";
// router
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const { colors, fonts } = useTheme();
  const navigate = useNavigate();
  const [sign, setSign] = useState(null);

  const toSignUp = () => {
    navigate("signup");
    setSign(true);
  };
  const toSignIn = () => {
    navigate("signin");
    setSign(false);
  };

  return (
    <AuthStyles color={colors} font={fonts} state={sign}>
      <div className="banner">
        <img
          className="banner__logo"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
        <img src={image} alt="" width={250} />
      </div>
      <div className="sign">
        <div className="header">
          <h2 className="click true" onClick={toSignUp}>
            Sign Up
          </h2>
          <p className="or">or</p>
          <h2 className="click false" onClick={toSignIn}>
            Sign In
          </h2>
        </div>
        <Outlet />
      </div>
    </AuthStyles>
  );
}

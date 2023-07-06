import useTheme from "../../hooks/useTheme";
// images
import image from "../../assets/sign.svg";
// styles
import { AuthStyles } from "./AuthStyles";
// router
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// components
import Logo from "../../components/Logo/Logo";

export default function Auth() {
  const { colors, fonts } = useTheme();
  const navigate = useNavigate();

  const toSignUp = () => {
    navigate("signup");
  };
  const toSignIn = () => {
    navigate("signin");
  };

  return (
    <AuthStyles color={colors} font={fonts}>
      <div className="banner">
        <div className="banner__logo">
          <Logo />
        </div>
        <img className="banner__img" src={image} alt="" width={250} />
      </div>
      <div className="form">
        <div className="form__header">
          <h2 className="form__navigator " onClick={toSignUp}>
            Sign Up
          </h2>
          <p className="form__letter">or</p>
          <h2 className="form__navigator " onClick={toSignIn}>
            Sign In
          </h2>
        </div>
        <Outlet />
      </div>
    </AuthStyles>
  );
}

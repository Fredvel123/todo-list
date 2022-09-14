import logo from "../../assets/logo.png";
import { MainStyles } from "./MainStyles";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <MainStyles>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>Todo</h2>
        </div>
        <div className="buttons">
          <Link to="/auth/signin" className="button">
            Sign In
          </Link>
          <Link to="/auth/signup" className="button">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="banner">
        <h2>A Website App to organize your life and make your days easier</h2>
        <p>
          To get started only you need to create an account with your email, or
          <br />
          if you already have a account please log in
        </p>
        <div className="btns">
          <Link to="/auth/signin" className="button">
            Sign In
          </Link>
          <Link to="/auth/signup" className="button">
            Sign Up
          </Link>
        </div>
      </div>
    </MainStyles>
  );
}

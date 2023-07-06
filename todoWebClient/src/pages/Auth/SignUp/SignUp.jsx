import { useState } from "react";
// components
import SpinnerLoading from "../../../components/SpinnerLoading/SpinnerLoading";
import Input from "../../../components/Input/Input";
// icons
import { SignUpStyles } from "./SignUpStyles";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// hooks
import useTheme from "../../../hooks/useTheme";
import useSignUp from "../../../hooks/useSignUp";
import { regExp } from "../../../config/reg.exp";

export default function SignUp() {
  const { colors, fonts } = useTheme();
  // input
  const [fullName, setFullName] = useState({ value: "", isValid: null });
  const [email, setEmail] = useState({ value: "", isValid: null });
  const [password, setPassword] = useState({ value: "", isValid: null });
  const [repeatPassword, setRepeatPassword] = useState({
    value: "",
    isValid: null,
  });
  const matchPassword = () => {
    if (password.value === repeatPassword.value) {
      setRepeatPassword({ ...repeatPassword, isValid: true });
    } else {
      setRepeatPassword({ ...repeatPassword, isValid: false });
    }
  };
  const { response, loading, error, registerUser, setResponse } = useSignUp(
    fullName.value,
    email.value,
    password.value
  );

  const handlerForm = (e) => {
    e.preventDefault();
    if (!fullName.isValid) {
      setResponse({
        message:
          "there is something wrong with your full name, only letters are valid",
      });
      return;
    }
    if (!email.isValid) {
      setResponse({ message: "your email is not valid" });
      return;
    }
    if (!password.isValid) {
      setResponse({ message: "yout password is not a password valid" });
      return;
    }
    if (!repeatPassword.isValid) {
      setResponse({ message: "your password is not a password valid" });
      return;
    }
    registerUser();
  };

  return (
    <SignUpStyles color={colors} font={fonts}>
      <form action="" onSubmit={handlerForm}>
        <Input
          type="email"
          placeh="email"
          title="E-mail:"
          state={email}
          setState={setEmail}
          expression={regExp.email}
        />
        <Input
          type="text"
          placeh="full name"
          title="Full Name:"
          state={fullName}
          setState={setFullName}
          expression={regExp.name}
        />
        <Input
          type="password"
          placeh="password"
          title="Password:"
          state={password}
          setState={setPassword}
          expression={regExp.password}
        />
        <Input
          type="password"
          placeh="password"
          title="Repeate Password:"
          state={repeatPassword}
          setState={setRepeatPassword}
          matchPsswd={matchPassword}
        />
        <button className="form__button">
          <ArrowRightIcon className="form__icon" />
        </button>
      </form>
      {loading ? (
        <SpinnerLoading />
      ) : error !== null ? (
        <p>{error}</p>
      ) : (
        <p className="form__message">{response.message}</p>
      )}
    </SignUpStyles>
  );
}
